import { z } from "zod";
import { GENDERS, MAX_IMAGE_FILE_SIZE, POST_CATEGORIES } from "./constants";

export const userSchema = z.object({
  username: z
    .string()
    .min(3, "Username should be at least 3 characters")
    .max(20, "Username should be at most 20 characters")
    .refine((val) => !/^User\d+$/.test(val), {
      message: "New username cannot be in this format: User[NUMBERS]",
    }),
  displayName: z
    .string()
    .min(3, "Display name should be at least 3 characters")
    .max(30, "Display name should be at most 30 characters"),
  birthday: z.string().optional(),
  gender: z.enum(GENDERS, { message: "Please select a gender" }),
  country: z
    .string()
    .max(30, "Country name should be at most 30 characters")
    .optional(),
  bio: z
    .string()
    .max(300, "About text should be at most 300 characters")
    .optional(),
  website: z.string(),
  facebook: z.string(),
  x: z.string(),
  instagram: z.string(),
  reddit: z.string(),
});

export type UserSchema = z.infer<typeof userSchema>;

/**********************************/

export const postSchema = z.object({
  title: z
    .string()
    .min(3, "Post title should be at least 3 characters")
    .max(45, "Post title should be at most 45 characters"),
  preview: z
    .string()
    .min(10, "Post preview should be at least 10 characters")
    .max(100, "Post preview should be at most 100 characters"),
  text: z.string().refine(
    (text) => {
      const wordCount = text.split(" ").length;
      return wordCount >= 10 && wordCount <= 2500;
    },
    { message: "Post text must be between 10 and 2500 words" }
  ),
  category: z.enum(POST_CATEGORIES, { message: "Please select a category" }),
});

export const imageSchema = z.object({
  imageUrl: validateImageFile(),
});

function validateImageFile() {
  // Set maximum size for an image
  const maxUploadSize = MAX_IMAGE_FILE_SIZE;
  const acceptedFileTypes = ["image/"];

  return (
    z
      .instanceof(File)
      // Check the size
      .refine((file) => {
        return !file || file.size <= maxUploadSize;
      }, "File size must be less than 3MB")
      // Check the file type
      .refine((file) => {
        return (
          !file || acceptedFileTypes.some((type) => file.type.startsWith(type))
        );
      }, "File must be an image")
  );
}
