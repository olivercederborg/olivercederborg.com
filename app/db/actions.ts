"use server"
import { differenceInHours } from "date-fns"

import { auth } from "@/app/auth"
import { db } from "@/app/db"
import { guestbook } from "@/app/db/schema"
import { desc, eq } from "drizzle-orm"
import { Session } from "next-auth"
import { revalidatePath } from "next/cache"

async function getSession(): Promise<Session> {
   let session = await auth()
   if (!session || !session.user) {
      throw new Error("Unauthorized")
   }

   return session
}

export async function hasSignedToday(email: string) {
   const now = new Date()

   if (email === "hey@olivercederborg.com") {
      return { hasSigned: false }
   }

   const lastSignage = await db
      .select()
      .from(guestbook)
      .where(eq(guestbook.email, email))
      .orderBy(desc(guestbook.createdAt))
      .limit(1)

   if (!lastSignage.length) {
      return { hasSigned: false }
   }

   const hoursSinceLastSignage = differenceInHours(
      now,
      lastSignage[0].createdAt,
   )

   if (lastSignage.length && hoursSinceLastSignage < 24) {
      const hoursToSignAgain = 24 - hoursSinceLastSignage

      return { hasSigned: true, hoursToSignAgain }
   }

   return { hasSigned: false }
}

export async function saveGuestbookEntry(formData: FormData) {
   let session = await getSession()
   if (!session.user) throw new Error("Unauthorized")

   let email = session.user.email as string
   let createdBy = session.user.name || email || "Anonymous"

   const { hasSigned, hoursToSignAgain } = await hasSignedToday(email)

   if (hasSigned) {
      return {
         success: false,
         message: `You can sign again in ${hoursToSignAgain} hours.`,
      }
   }

   let entry = formData.get("entry")?.toString() || ""
   let body = entry.slice(0, 500).trim()

   if (!body) {
      return {
         success: false,
         message: "Entry cannot be empty",
      }
   }

   try {
      await db.insert(guestbook).values({
         createdBy,
         email,
         body,
      })
   } catch (error) {
      console.error(error)
      return {
         success: false,
         message: "An error occurred while saving your entry",
      }
   }

   revalidatePath("/guestbook")
   return { success: true, message: "Your entry has been saved" }
}
