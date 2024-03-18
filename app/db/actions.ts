"use server"

import { auth } from "@/app/auth"
import { db } from "@/app/db"
import { guestbook } from "@/app/db/schema"
import { and, count, eq, gte } from "drizzle-orm"
import { Session } from "next-auth"
import { revalidatePath } from "next/cache"

async function getSession(): Promise<Session> {
   let session = await auth()
   if (!session || !session.user) {
      throw new Error("Unauthorized")
   }

   return session
}

export async function hasSignedThisWeek(email: string) {
   let lastWeek = new Date()
   lastWeek.setDate(lastWeek.getDate() - 7)

   let entries = await db
      .select({ value: count() })
      .from(guestbook)
      .where(
         and(eq(guestbook.email, email), gte(guestbook.createdAt, lastWeek)),
      )

   return entries[0].value > 0
}

export async function saveGuestbookEntry(formData: FormData) {
   let session = await getSession()
   if (!session.user) throw new Error("Unauthorized")

   let email = session.user.email as string
   let createdBy = session.user.name || email || "Anonymous"

   if (await hasSignedThisWeek(email)) {
      return {
         success: false,
         message: "You have already signed this week",
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
