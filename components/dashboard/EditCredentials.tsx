"use client";
import { Button } from "../ui/button";

// Props type
type EditCredentialsProps = {
  clerkId: string;
  exitFn: () => void;
};

// The component
function EditCredentials({ clerkId, exitFn }: EditCredentialsProps) {
  // Returned JSX
  return (
    <>
      <h2>Under construction</h2>
      <Button onClick={exitFn}>Cancel</Button>
    </>
  );
}

export default EditCredentials;
