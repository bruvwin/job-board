import { pgTable, uuid, varchar, integer, pgEnum, primaryKey } from "drizzle-orm/pg-core";

import {JobListingTable} from "./jobListing";
import {UserTable} from "./user"
import { createdAt, updatedAt } from "../schemaHelpers";


export const applicationStages = ["denied",
  "applied",
  "interested",
  "interviewed",
  "hired"] as const
export type ApplicationStage = typeof applicationStages[number]
export const applicationStageEnum = pgEnum("job_listing_application_stage", applicationStages);


export const JobListingApplicationTable = pgTable(
    "job_listing_application",
    {
        job_listing_id: uuid().references(() => JobListingTable.id, {onDelete: "cascade"}).notNull(),
        applicant_id: varchar().references(() => UserTable.id, {onDelete: "cascade"}).notNull(),
        cover_letter: varchar(),
        rating: integer(),
        stage: applicationStageEnum().notNull(),
        createdAt,
        updatedAt
    },
    table => [primaryKey({columns: [table.applicant_id, table.job_listing_id]})],
)