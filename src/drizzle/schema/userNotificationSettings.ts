import { boolean, pgTable, varchar } from "drizzle-orm/pg-core"
import { createdAt, updatedAt } from "../schemaHelpers"
import { UserTable } from "./user"

export const UserNotificationSettingsTable = pgTable(
  "user_notification_settings",
  {
    user_id: varchar()
      .primaryKey()
      .references(() => UserTable.id),
    new_job_email_notifications: boolean().notNull().default(false),
    ai_prompt: varchar(),
    createdAt,
    updatedAt,
  }
)