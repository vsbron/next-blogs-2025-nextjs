"use client";
import Link from "next/link";
import { User } from "@prisma/client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { SubmitButton } from "@/components/form/Buttons";
import FormInput from "@/components/form/FormInput";
import { Button } from "@/components/ui/button";

import { updateUserAction } from "@/utils/actions/users";
import { handleFormAction } from "@/utils/helpers";
import { userSchema } from "@/utils/schemas";

// Type for form values
type FormValues = {
  username: string;
  displayName: string;
  bio?: string;
  country?: string;
};

// The component
function EditProfile({ user }: { user: User }) {
  // Destructure user object
  const { username, displayName, bio, country } = user;

  // Get the form values from React-Hook-Form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(userSchema),
    mode: "onBlur",
    defaultValues: {
      username,
      displayName,
      bio: bio || "",
      country: country || "",
    },
  });

  // On submit handler
  const onSubmit = async (data: FormValues) => {
    await handleFormAction(updateUserAction, data, "/dashboard/profile");
  };

  // Returned JSX
  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)} className="basic-form">
        <FormInput
          id="username"
          type="text"
          {...register("username")}
          error={errors.username?.message}
        />
        <FormInput
          id="displayName"
          label="Display Name"
          type="text"
          {...register("displayName")}
          error={errors.displayName?.message}
        />
        <FormInput
          id="country"
          type="text"
          {...register("country")}
          error={errors.country?.message}
        />
        <FormInput
          id="bio"
          label="About"
          type="text"
          {...register("bio")}
          error={errors.bio?.message}
        />
        <div className="flex gap-4 items-center mt-2">
          <Button variant="outline" asChild>
            <Link href="/dashboard/profile/">Go Back</Link>
          </Button>
          <SubmitButton text="Update user" isPending={isSubmitting} />
        </div>
      </form>
    </section>
  );
}

export default EditProfile;
