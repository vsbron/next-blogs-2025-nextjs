import { User } from "./types";

export const SITE_DOMAIN = "https://next-blogs-2025.vercel.app";
export const MAX_IMAGE_FILE_SIZE = 3 * 1024 * 1024;
export const BUCKET_NAME = "post-images";

export const GENDERS = ["Male", "Female", "Unknown"];
export const POST_CATEGORIES = [
  "Art & Design",
  "Business & Finance",
  "Education & Learning",
  "Food & Recipes",
  "Gaming",
  "Health & Fitness",
  "Lifestyle",
  "Movies & TV",
  "Music",
  "Personal Stories",
  "Pro Wrestling",
  "Programming & Development",
  "Science & Nature",
  "Sports",
  "Technology",
  "Travel",
  "Other",
];

export const SOCIALS: { key: keyof User; prefix?: string }[] = [
  { key: "website" },
  { key: "facebook", prefix: "https://facebook.com/" },
  { key: "x", prefix: "https://twitter.com/" },
  { key: "instagram", prefix: "https://instagram.com/" },
  { key: "reddit", prefix: "https://www.reddit.com/user/" },
];
