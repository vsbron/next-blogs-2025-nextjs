"use client";
import { User } from "@prisma/client";

import TextAreaInput from "@/components/form/TextAreaInput";
import TextInput from "@/components/form/TextInput";
import SelectInput from "@/components/form/SelectInput";
import { Button } from "@/components/ui/button";
import SectionSeparator from "../SectionSeparator";

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
        <TextInput id="username" label="Username" placeholder="Set username" />
        <TextInput
          id="displayName"
          label="Display name"
          placeholder="Enter your name"
        />
        <SelectInput id="gender" label="Gender" />
        <TextInput
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
        {/* SOCIALS */}
        <TextInput
          id="website"
          label="Website"
          placeholder="https://domain.com/"
        />
        <TextInput
          id="facebook"
          label="Facebook"
          placeholder="https://facebook.com/username"
        />
        <TextInput
          id="x"
          label="X (Twitter)"
          placeholder="https://x.com/username"
        />
        <TextInput
          id="instagram"
          label="Instagram"
          placeholder="https://instagram.com/username"
        />
        <TextInput
          id="reddit"
          label="Reddit"
          placeholder="https://www.reddit.com/user/username"
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
