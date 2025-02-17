import { z } from "zod";

export const blogSchema = z.object({
  title: z
    .string({ required_error: "Title is required" })
    .min(5, { message: "Title must be at least 5 characters long" }),

  content: z
    .string({ required_error: "Content is required" })
    .min(20, { message: "Content must be at least 20 characters long" }),

  coverImage: z
    .string({ required_error: "Cover Image URL is required" })
    .url({ message: "Invalid cover image URL format" }),

  isFeatured: z.boolean({ required_error: "isFeatured is required" }),
});
