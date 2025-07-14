import { pgTable } from "drizzle-orm/pg-core";
import { id } from "../schemaHelpers";

export const JobListingTable = pgTable("job_lisstings", {
    id,
})