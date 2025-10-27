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
