// Helper function that shortens the preview text
export function limitPreview(text: string) {
  // Return shortened text
  return text.split(" ").slice(0, 17).join(" ") + "...";
}
