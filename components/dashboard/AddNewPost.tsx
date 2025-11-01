"use client";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { SubmitButton } from "../form/Buttons";
import FormInput from "../form/FormInput";
import ImageInput from "../form/ImageInput";
import TextAreaInput from "../form/TextAreaInput";

import { createPostAction } from "@/utils/actions/post";
import { handleFormAction } from "@/utils/helpers";
import { imageSchema, postSchema } from "@/utils/schemas";

// Type for form values
type FormValues = {
  title: string;
  preview: string;
  text: string;
  imageUrl: File;
};

// The component
function AddNewPost() {
  // Combine 2 schemas
  const combinedSchema = z.intersection(postSchema, imageSchema);

  // Get the form values from React-Hook-Form
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(combinedSchema),
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
        control={control}
        {...register("text")}
        error={errors.text?.message}
      />
      <ImageInput
        {...register("imageUrl")}
        label="Add an image (1MB)"
        setValue={setValue}
        error={errors.imageUrl?.message}
      />

      <SubmitButton text="Submit post" isPending={isSubmitting} />
    </form>
  );
}

export default AddNewPost;
