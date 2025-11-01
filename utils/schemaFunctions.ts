import z, { ZodType } from "zod";

// Helper function that validates data and returns error if fails
export function validatedWithZodSchema<T>(
  schema: ZodType<T>,
  data: unknown
): T {
  // Safe parse the data
  const result = schema.safeParse(data);

  // Throw custom error message if validation fails
  if (!result.success) {
    const error = result.error.issues.map((err) => err.message);
    throw new Error(error.join(", "));
  }

  return result.data;
}
