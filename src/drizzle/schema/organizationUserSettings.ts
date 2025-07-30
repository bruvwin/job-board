import {
  boolean,
  integer,
  pgTable,
  primaryKey,
  varchar,
} from "drizzle-orm/pg-core"
import { createdAt, updatedAt } from "../schemaHelpers"
import { UserTable } from "./user"
import { OrganizationTable } from "./organization"

export const OrganizationUserSettingsTable = pgTable(
  "organization_user_settings",
  {
    user_id: varchar()
      .notNull()
      .references(() => UserTable.id, {onDelete: "cascade"}),
    organization_id: varchar()
      .notNull()
      .references(() => OrganizationTable.id, {onDelete: "cascade"}),
    new_application_email_notifications: boolean().notNull().default(false),
    minimum_rating: integer(),
    createdAt,
    updatedAt,
  },
  table => [primaryKey({ columns: [table.user_id, table.organization_id] })]
)