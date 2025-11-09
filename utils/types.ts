import { JsonValue } from "@prisma/client/runtime/library";

// Type for action function and its return
export type actionFunction = (formData: FormData) => actionReturnType;
export type actionReturnType = Promise<{ success: boolean; message: string }>;

// User type
export type User = {
  imageUrl: string | null;
  username: string;
  displayName: string;
  email: string;
  dateCreated: Date;
  birthday: string | null;
  gender: Gender;
  country: string | null;
  bio: string | null;
  socials: JsonValue;
};

type Gender = "Male" | "Female" | "Unknown";

// Post type
export type PostPreview = {
  id: number;
  title: string;
  preview: string;
  imageUrl: string;
  published: Date;
  views: number;
  likes: Like[];
};

// Post type
export type Post = PostPreview & {
  text: string;
  updated: Date;
  author: { displayName: string; username: string };
};

// Like type
export type Like = {
  id: number;
  userId?: string;
  postId?: number;
};
