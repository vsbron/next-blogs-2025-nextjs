"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import FormInput from "../form/FormInput";
import TextAreaInput from "../form/TextAreaInput";
import ImageInput from "../form/ImageInput";
import { Button } from "@/components/ui/button";

import { createPostAction } from "@/utils/actions/post";
import { handleFormAction } from "@/utils/helpers";
import { postSchema } from "@/utils/schemas";
import { SubmitButton } from "../form/Buttons";

type FormValues = {
  title: string;
  preview: string;
  text: string;
  imageUrl?: File;
};

function AddNewPost() {
  // Get the form values from React-Hook-Form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(postSchema),
    mode: "onBlur",
  });

  // On submit handler
  const onSubmit = async (data: FormValues) => {
    await handleFormAction(createPostAction, data, "/dashboard/my-posts");
  };

  // Returned JSX
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="basic-form">
      <FormInput
        id="title"
        label="Post title"
        type="text"
        {...register("title")}
        error={errors.title?.message}
      />
      <FormInput
        id="preview"
        label="Post preview"
        type="text"
        {...register("preview")}
        error={errors.preview?.message}
      />
      <TextAreaInput
        id="text"
        label="Compose your post"
        height="150"
        {...register("text")}
        error={errors.text?.message}
      />
      <ImageInput
        {...register("imageUrl")}
        label="Add an image"
        error={errors.imageUrl?.message}
      />
      <SubmitButton text="Add a post" isPending={isSubmitting} />
    </form>
  );
}

export default AddNewPost;
