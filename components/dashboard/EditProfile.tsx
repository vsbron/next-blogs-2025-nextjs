"use client";
import { User } from "@prisma/client";
import { Button } from "../ui/button";

// Props type
type EditProfileProps = {
  user: User;
  exitFn: () => void;
};

// The component
function EditProfile({ user, exitFn }: EditProfileProps) {
  // Returned JSX
  return (
    <>
      <h2>Under construction</h2>
      <Button onClick={exitFn}>Cancel</Button>
    </>
  );
}

export default EditProfile;
