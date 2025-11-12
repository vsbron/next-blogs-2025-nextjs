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
  gender: string;
  country: string | null;
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
  author: { displayName: string; username: string };
};

// Like type
export type Like = {
  id: number;
  userId?: string;
  postId?: number;
};
