"use client";
import { User } from "@prisma/client";
import { Button } from "../ui/button";
import TextAreaInput from "../form/TextAreaInput";
import SelectInput from "../form/SelectInput";
import BaseInput from "../form/BaseInput";

// Props type
type EditProfileProps = {
  user: User;
  exitFn: () => void;
};

// The component
function EditProfile({ user, exitFn }: EditProfileProps) {
  // Destructuring user
  const { username, displayName, bio } = user;

  // Returned JSX
  return (
    <>
      <h2 className="font-poppins text-2xl mb-4">Edit credentials</h2>
      <form className="flex flex-col gap-4">
        <BaseInput id="username" label="Username" placeholder="Set username" />
        <BaseInput
          id="displayName"
          label="Display name"
          placeholder="Enter your name"
        />

        <SelectInput id="gender" label="Gender" />

        <TextAreaInput
          id="bio"
          label="About"
          placeholder="Write something about yourself"
        />
        <div className="flex gap-x-4 mt-4">
          <Button type="submit">Save</Button>
          <Button variant="outline" onClick={exitFn}>
            Cancel
          </Button>
        </div>
      </form>
    </>
  );
}

export default EditProfile;
