/* eslint-disable @typescript-eslint/no-explicit-any */

// Action function to create a new post
export const createPostAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  return { message: "Post successfully created" };
};
