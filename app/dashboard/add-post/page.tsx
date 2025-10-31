import { Metadata } from "next";

import SectionTitle from "@/components/SectionTitle";
import FormInput from "@/components/form/FormInput";
import { Button } from "@/components/ui/button";

// Metadata
export const metadata: Metadata = {
  title: "Add a Post",
  description:
    "Create and publish new articles to share your stories with the NextBlogs community.",
};

const createPostAction = async (formData: FormData) => {
  "use server";
  const name = formData.get("name") as string;
  console.log(name);
};

// The page
function AddPostPage() {
  // Returned JSX
  return (
    <section>
      <SectionTitle>Add a new post</SectionTitle>
      <br />
      <form
        action={createPostAction}
        className="flex flex-col gap-4 items-start"
      >
        <FormInput id="name" label="Post name" type="text" />
        <Button type="submit">Submit</Button>
      </form>
    </section>
  );
}

export default AddPostPage;
