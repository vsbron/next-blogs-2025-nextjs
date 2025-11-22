// Type for action function and its return
export type actionFunction = (formData: FormData) => actionReturnType;
export type actionReturnType = Promise<{ success: boolean; message: string }>;

// Post type
export type UserPreview = {
  username: string;
  displayName: string;
  imageUrl: string | null;
  dateCreated: Date;
  country: string | null;
  _count?: { posts: number };
};

// User type
export type User = UserPreview & {
  clerkId: string;
  email: string;
  birthday: string | null;
  gender: string;
  bio: string | null;
  website: string | null;
  facebook: string | null;
  x: string | null;
  instagram: string | null;
  reddit: string | null;
};

// Post type
export type PostPreview = {
  id: number;
  title: string;
  preview: string;
  imageUrl: string;
  published: Date;
  views: number;
  category: string;
  likes: Like[];
};

// Post type
export type Post = PostPreview & {
  text: string;
  updated: Date;
  author: { displayName: string; username: string; imageUrl: string | null };
};

// Like type
export type Like = {
  id: number;
  userId?: string;
  postId?: number;
};
