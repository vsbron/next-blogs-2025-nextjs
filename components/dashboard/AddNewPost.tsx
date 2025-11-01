"use client";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";

import TextAreaInput from "../form/TextAreaInput";
import ImageInput from "../form/ImageInput";
import { SubmitButton } from "../form/Buttons";
import { createPostAction } from "@/utils/actions/post";

function AddNewPost() {
  // Returned JSX
  return (
    <FormContainer action={createPostAction} className="flex flex-col gap-4">
      <FormInput id="title" label="Post title" type="text" />
      <FormInput id="preview" label="Post preview" type="text" />
      <TextAreaInput id="text" label="Compose your post" height="150" />
      <ImageInput />
      <SubmitButton text="Add a post" />
    </FormContainer>
  );
}

export default AddNewPost;
