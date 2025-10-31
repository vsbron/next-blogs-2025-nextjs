"use client";
import { User } from "@prisma/client";

import TextAreaInput from "@/components/form/TextAreaInput";
import FormInput from "@/components/form/FormInput";
import SelectInput from "@/components/form/SelectInput";
import { Button } from "@/components/ui/button";
import SectionSeparator from "../SectionSeparator";
import { useForm } from "react-hook-form";
import { userSchema, type UserSchema } from "@/utils/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { updateUserAction } from "@/utils/actions/users";
import { Input } from "../ui/input";
import { SubmitButton } from "../form/Buttons";

// Props type
type EditProfileProps = {
  user: User;
  exitFn: () => void;
};

// The component
function EditProfile({ user, exitFn }: EditProfileProps) {
  // Destructuring user
  const { username, displayName, bio, country } = user;

  const form = useForm<UserSchema>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      username: username,
      displayName: displayName,
      bio: bio || "",
      country: country || "",
    },
  });

  // Returned JSX
  return (
    <>
      <h2 className="font-poppins text-2xl mb-4">Edit profile details</h2>
      <Form {...form}>
        <form action={updateUserAction} className="space-y-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="John Doe" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="displayName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Display name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="john@example.com" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="john@example.com" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>About</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="john@example.com" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <SubmitButton text="Update User" />

          <Button variant="outline" onClick={exitFn}>
            Cancel
          </Button>
        </form>
      </Form>
    </>
  );
}

export default EditProfile;

{
  /* <form className="flex flex-col gap-4">
        <FormInput id="username" label="Username" placeholder="Set username" />
        <FormInput
          id="displayName"
          label="Display name"
          placeholder="Enter your name"
        />
        <SelectInput id="gender" label="Gender" />
        <FormInput
          id="country"
          label="Country"
          placeholder="Where you're blogging from?"
        />
        <TextAreaInput
          id="bio"
          label="About"
          height="150"
          placeholder="Write something about yourself"
        />
        <SectionSeparator />
        
        <FormInput
          id="website"
          label="Website"
          placeholder="https://domain.com/"
        />
        <FormInput
          id="facebook"
          label="Facebook"
          placeholder="https://facebook.com/username"
        />
        <FormInput
          id="x"
          label="X (Twitter)"
          placeholder="https://x.com/username"
        />
        <FormInput
          id="instagram"
          label="Instagram"
          placeholder="https://instagram.com/username"
        />
        <FormInput
          id="reddit"
          label="Reddit"
          placeholder="https://www.reddit.com/user/username"
        />

        <div className="flex gap-x-4 mt-4">
          <Button type="submit">Save</Button>
        </div>
      </form> */
}
