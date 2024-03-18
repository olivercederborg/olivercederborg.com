"use server"

import { auth } from "@/app/auth"
import { db } from "@/app/db"
import { guestbook } from "@/app/db/schema"
import { Session } from "next-auth"
import { revalidatePath } from "next/cache"

async function getSession(): Promise<Session> {
   let session = await auth()
   if (!session || !session.user) {
      throw new Error("Unauthorized")
   }

   return session
}

export async function saveGuestbookEntry(formData: FormData) {
   let session = await getSession()
   if (!session.user) throw new Error("Unauthorized")

   let email = session.user.email as string
   let createdBy = session.user.name || email || "Anonymous"

   let entry = formData.get("entry")?.toString() || ""
   let body = entry.slice(0, 500).trim()

   if (!body) {
      throw new Error("Entry is empty")
   }

   await db.insert(guestbook).values({
      createdBy,
      email,
      body,
   })

   revalidatePath("/guestbook")
}
