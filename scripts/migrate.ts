import { db } from "@/app/db"
import { migrate } from "drizzle-orm/vercel-postgres/migrator"

async function main() {
   await migrate(db, { migrationsFolder: "./drizzle" })
}

main()
