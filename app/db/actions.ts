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
   let email = session.user?.email as string
   let createdBy = session.user?.name as string

   if (!session.user) {
      throw new Error("Unauthorized")
   }

   let entry = formData.get("entry")?.toString().trim() || ""
   let body = entry.slice(0, 500)

   await db.insert(guestbook).values({
      createdBy,
      email,
      body,
   })

   revalidatePath("/guestbook")
}
