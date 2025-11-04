/* eslint-disable @typescript-eslint/no-explicit-any */
import { redirect } from "next/navigation";
import { toast } from "sonner";

// Function that return approx. reading time in minutes
export function getReadingTime(article: string) {
  const wordCount = article.split(/\s+/).length; // Count the number of words in the article
  const minutes = Math.ceil(wordCount / 200); // Calculate the time
  return minutes + ` minute${minutes > 1 ? "s" : ""}`; // Return the time
}

// Helper function that shortens the preview text
export function limitPreview(text: string, maxChars: number) {
  // If below the limit - return text
  if (text.length <= maxChars) return text;

  // Get to the last space withing the range and add "..."
  const trimmed = text.slice(0, maxChars);
  const lastSpace = trimmed.lastIndexOf(" ");
  return trimmed.slice(0, lastSpace) + "...";
}

// Helper function to format date
export const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
};

// Rendering error function for actions
export const renderError = (err: unknown, text: string) => {
  console.log(err);
  return {
    success: false,
    message:
      err instanceof Error ? err.message : `There was an error while ${text}`,
  };
};

// Helper function to handle form submission
export async function handleFormAction(
  action: (
    formData: FormData
  ) => Promise<{ success: boolean; message: string }>,
  data: Record<string, any>,
  redirectTo?: string
) {
  // Handle the form data
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value as any);
  });

  // Call the action function
  const result = await action(formData);

  // Handle the outcome
  toast("", { description: result.message });
  if (result.success && redirectTo) {
    redirect(redirectTo);
  }

  // Return the result
  return result;
}
