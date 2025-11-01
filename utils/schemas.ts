import { z } from "zod";
import { MAX_IMAGE_FILE_SIZE } from "./constants";

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
  // gender: z.enum(["Male", "Female", "Unknown"]),
  country: z
    .string()
    .max(30, "Country name should be at most 30 characters")
    .optional(),
  bio: z
    .string()
    .max(300, "About text should be at most 300 characters")
    .optional(),
  // socials: z.object({
  //   website: z.string().optional(),
  //   facebook: z.string().optional(),
  //   x: z.string().optional(),
  //   instagram: z.string().optional(),
  //   reddit: z.string().optional(),
  // }),
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
    .max(80, "Post preview should be at most 80 characters"),
  text: z.string().refine(
    (text) => {
      const wordCount = text.split(" ").length;
      return wordCount >= 10 && wordCount <= 1500;
    },
    { message: "Post text must be between 10 and 1500 words" }
  ),
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
