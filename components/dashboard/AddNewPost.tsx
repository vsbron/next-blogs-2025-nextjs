"use client";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import { Button } from "@/components/ui/button";

import { createPostAction } from "@/utils/actions/post";
import TextAreaInput from "../form/TextAreaInput";
import ImageInput from "../form/ImageInput";

function AddNewPost() {
  // Returned JSX
  return (
    <FormContainer action={createPostAction} className="flex flex-col gap-4">
      <FormInput id="title" label="Post title" type="text" />
      <FormInput id="preview" label="Post preview" type="text" />
      <TextAreaInput id="text" label="Compose your post" height="150" />
      <ImageInput />
      <Button type="submit">Add a post</Button>
    </FormContainer>
  );
}

export default AddNewPost;
