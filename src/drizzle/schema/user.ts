import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { createdAt, updatedAt } from "../schemaHelpers";
export const UserTable = pgTable("users", {
  id: varchar().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  imageUrl: varchar().notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  createdAt,
  updatedAt,
});