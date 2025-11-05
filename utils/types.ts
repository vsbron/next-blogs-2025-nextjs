// Type for action function and its return
export type actionFunction = (formData: FormData) => actionReturnType;
export type actionReturnType = Promise<{ success: boolean; message: string }>;

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
  userId: string;
  postId: number;
};
