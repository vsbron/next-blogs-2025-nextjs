"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import { ButtonsContainer, SubmitButton } from "@/components/form/Buttons";
import DateInput from "@/components/form/DateInput";
import FormInput from "@/components/form/FormInput";
import RadioInput from "@/components/form/RadioInput";
import { Button } from "@/components/ui/button";

import { updateUserAction } from "@/utils/actions/users";
import { handleFormAction } from "@/utils/helpers";
import { GENDERS } from "@/utils/constants";
import { userSchema } from "@/utils/schemas";
import { User } from "@/utils/types";

// Type for form values
type FormValues = {
  username: string;
  displayName: string;
  birthday?: string;
  gender: string;
  country?: string;
  bio?: string;
};

// The component
function EditProfile({ user }: { user: User }) {
  // Destructure user object
  const { username, displayName, bio, country, gender, birthday } = user;

  // Get the form values from React-Hook-Form
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(userSchema),
    mode: "onBlur",
    defaultValues: {
      username,
      displayName,
      birthday: birthday || "",
      gender,
      bio: bio || "",
      country: country || "",
    },
  });

  // Get the router
  const router = useRouter();

  // Form submit handler
  const onSubmit = async (data: FormValues) => {
    // Handle the form submission and redirect user if successful
    const result = await handleFormAction(updateUserAction, data);
    if (result.success) router.push("/dashboard/profile");
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

        <DateInput
          id="birthday"
          control={control}
          error={errors.birthday?.message}
        />
        <RadioInput
          id="gender"
          options={GENDERS}
          control={control}
          error={errors.gender?.message}
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

        <ButtonsContainer>
          <Button variant="outline" asChild>
            <Link href="/dashboard/profile/">Go Back</Link>
          </Button>
          <SubmitButton text="Update user" isPending={isSubmitting} />
        </ButtonsContainer>
      </form>
    </section>
  );
}

export default EditProfile;
