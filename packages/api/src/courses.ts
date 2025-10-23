import { z } from "zod";

/**
 * Reference DTO (used for relations or lightweight embeds)
 */
export const CourseRef = z.object({
  id: z.int(),
  name: z.string(),
});
export type CourseRefType = z.infer<typeof CourseRef>;

/**
 * Output DTO (used in API responses)
 */
export const CourseOut = z.object({
  id: z.int(),
  title: z.string(),
  description: z.string().nullable(),
  courseCode: z.string(),
  credits: z.int(),
});

export type CourseOut = z.infer<typeof CourseOut>;

/**
 * Creation DTO (used for POST /courses)
 * - Don't include id; DB handles it.
 */
export const CourseCreate = z.object({
  title: z.string(),
  description: z.string().nullable(),
  courseCode: z.string(),
  credits: z.int(),
});
export type CourseCreate = z.infer<typeof CourseCreate>;

/**
 * Update DTO (used for PATCH /courses/:id)
 * - Include id + optional fields.
 */
export const CourseUpdate = z.object({
  id: z.int(),
  title: z.string().optional(),
  description: z.string().nullable().optional(),
  courseCode: z.string().optional(),
  
});
export type CourseUpdate = z.infer<typeof CourseUpdate>;

/**
 * Delete DTO (used for DELETE /courses/:id)
 * - Just the id is enough.
 */
export const CourseDelete = z.object({
  id: z.int(),
});
export type CourseDelete = z.infer<typeof CourseDelete>;