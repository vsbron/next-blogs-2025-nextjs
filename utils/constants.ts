import { User } from "./types";

export const SITE_DOMAIN = "https://next-blogs-2025.vercel.app";
// export const MAX_IMAGE_FILE_SIZE = 3 * 1024 * 1024;
export const MAX_IMAGE_FILE_SIZE = 1048576;
export const BUCKET_NAME = "post-images";
export const ARTICLES_PER_PAGE = 12;

export const GENDERS = ["Male", "Female", "Unknown"];
export const POST_CATEGORIES = [
  "Art & Design",
  "Books & Literature",
  "Business & Finance",
  "DIY & Crafts",
  "Education & Learning",
  "Fantasy",
  "Food & Recipes",
  "Gaming",
  "Health & Fitness",
  "History",
  "Horror",
  "Lifestyle",
  "Movies & TV",
  "Music",
  "Personal Stories",
  "Pop Culture",
  "Pro Wrestling",
  "Programming & Development",
  "Science & Nature",
  "Sports",
  "Technology",
  "Thriller",
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
