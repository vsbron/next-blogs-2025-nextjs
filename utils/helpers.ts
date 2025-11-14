/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "sonner";

// Helper function that shortens the preview text
export function limitPreview(text: string, maxChars: number) {
  // If below the limit - return text
  if (text.length <= maxChars) return text;

  // Get to the last space withing the range and add "..."
  const trimmed = text.slice(0, maxChars);
  const lastSpace = trimmed.lastIndexOf(" ");
  return trimmed.slice(0, lastSpace) + "...";
}

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
  data: Record<string, any>
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

  // Return the result
  return result;
}

// Function that return approx. reading time in minutes
export function getReadingTime(article: string) {
  const wordCount = article.split(/\s+/).length; // Count the number of words in the article
  const minutes = Math.ceil(wordCount / 200); // Calculate the time
  return minutes + ` minute${minutes > 1 ? "s" : ""}`; // Return the time
}

// Helper function to format date
export const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
};

// Function that calculates the current age or the age at the time of passing
export function calculateAge(birthdate: string, death?: string) {
  const birthDate = new Date(birthdate).getTime(); // Parse the date string into a Date object
  const finalDate = death ? new Date(death).getTime() : Date.now(); // Get the current date
  const differenceInMillis = finalDate - birthDate; // Calculate the difference in milliseconds between the current date and birth date
  return Math.floor(differenceInMillis / (1000 * 60 * 60 * 24 * 365.25)); // Return the age converted from ms
}

// Function that counts the days from the passed date to the current one
export function countDays(dateString: string) {
  // Convert the input date string to a Date object
  const inputDate = new Date(dateString);

  // Get the current date
  const currentDate = new Date();

  // Calculate the difference in milliseconds between the two dates
  const timeDifference = currentDate.getTime() - inputDate.getTime();

  // Convert the time difference from milliseconds to days
  const daysNum = Math.floor(timeDifference / (1000 * 3600 * 24));

  // Return the number of days
  return daysNum > 1000
    ? (daysNum / 1000).toFixed(1).replace(/\.0$/, "") + "k"
    : daysNum;
}
