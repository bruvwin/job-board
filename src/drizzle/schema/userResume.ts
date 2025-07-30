import { pgTable, varchar } from "drizzle-orm/pg-core"
import { createdAt, updatedAt } from "../schemaHelpers"
import { UserTable } from "./user"

export const UserResumeTable = pgTable("user_resumes", {
  user_id: varchar()
    .primaryKey()
    .references(() => UserTable.id),
  resume_file_url: varchar().notNull(),
  resume_file_key: varchar().notNull(),
  ai_summary: varchar(),
  createdAt,
  updatedAt,
})