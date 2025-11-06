import { createClient } from "@supabase/supabase-js";
import { BUCKET_NAME } from "./constants";

// Create supabase client
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
);

export const uploadImage = async (image: File) => {
  // Get the current timestamp
  const timestamp = Date.now();

  // Set the new file name
  const newName = `${timestamp}-${image.name}`;

  // Upload the image to supabase
  const { data } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(newName, image, { cacheControl: "3600" });

  // Guard clause
  if (!data) throw new Error("Image upload failed");

  // Return image URL
  return supabase.storage.from(BUCKET_NAME).getPublicUrl(newName).data
    .publicUrl;
};
