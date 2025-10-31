/* eslint-disable @typescript-eslint/no-explicit-any */

// Type for action function
export type actionFunction = (
  prevState: any,
  formData: FormData
) => Promise<{ message: string }>;
