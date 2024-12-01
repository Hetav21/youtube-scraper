import { z } from "zod";

// Checks for @ of the youtuber
// example: @mrbeast
export const youtubeIdSchema = z
  .string({
    required_error: "Id is required",
    invalid_type_error: "Id must be a string",
  })
  .startsWith("@", { message: "Must provide unique id of the creator" });
