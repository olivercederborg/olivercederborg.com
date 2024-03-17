import {
   pgTable,
   serial,
   text,
   timestamp,
   uniqueIndex,
} from "drizzle-orm/pg-core"

export const guestbook = pgTable("guestbook", {
   id: serial("id").primaryKey(),
   email: text("email").notNull(),
   body: text("body").notNull(),
   createdBy: text("createdBy").notNull(),
   createdAt: timestamp("createdAt").defaultNow().notNull(),
})
