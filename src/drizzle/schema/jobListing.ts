import { pgTable, varchar, text, integer, pgEnum, boolean, timestamp, index } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelpers";
import { OrganizationTable } from "./organization";

export const wageIntervals = ["hourly", "yearly"] as const;
export type WageInterval = typeof wageIntervals[number];
export const wageIntervalEnum = pgEnum("job_listing_wage_interval", wageIntervals);

export const locationRequirements = ["in-office", "hybrid", "remote"] as const;
export type LocationRequirement = typeof locationRequirements[number];
export const locationRequirementEnum = pgEnum("job_listing_location_requirement", locationRequirements);

export const experienceLevels = ["junior", "mid-level", "senior"] as const;
export type ExperienceLevel = typeof experienceLevels[number];
export const experienceLevelEnum = pgEnum("job_listing_experience_level", experienceLevels);

export const jobListingStatuses = ["draft", "published", "delisted"] as const;
export type JobListingStatus = typeof jobListingStatuses[number];
export const jobListingStatusEnum = pgEnum("job_listing_status", jobListingStatuses);

export const jobListingTypes = ["draft", "published", "delisted"] as const;
export type JobListingType = typeof jobListingTypes[number];
export const jobListingTypeEnum = pgEnum("job_listing_type", jobListingTypes);

export const JobListingTable = pgTable("job_listings", {
  id,
  organization_id: varchar()
    .references(() => OrganizationTable.id, { onDelete: "cascade" })
    .notNull(),
  title: varchar().notNull(),
  description: text().notNull(),
  wage: integer(),
  wage_interval: wageIntervalEnum(),
  state_abbreviation: varchar(),
  city: varchar(),
  is_featured: boolean().notNull().default(false),
  location_requirement: locationRequirementEnum().notNull(),
  experience_level: experienceLevelEnum().notNull(),
  status: jobListingStatusEnum().notNull(),
  type: jobListingTypeEnum().notNull(),
  posted_at: timestamp({withTimezone: true}),
  createdAt,
  updatedAt
},
table => [index().on(table.state_abbreviation)])