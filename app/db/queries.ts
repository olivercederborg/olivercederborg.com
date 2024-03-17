import { db } from "@/app/db"
import { guestbook } from "@/app/db/schema"
import { desc } from "drizzle-orm"

export async function getGuestbookEntries() {
   return db
      .select()
      .from(guestbook)
      .limit(50)
      .orderBy(desc(guestbook.createdAt))
}
