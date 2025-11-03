// Type for action function and its return
export type actionFunction = (formData: FormData) => actionReturnType;
export type actionReturnType = Promise<{ success: boolean; message: string }>;

// Post type
export type Post = {
  id: number;
  title: string;
  preview: string;
  imageUrl: string;
  published: Date;
  views: number;
  _count: { likes: number };
};
