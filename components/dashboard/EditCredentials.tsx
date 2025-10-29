"use client";
import { Button } from "@/components/ui/button";
import BaseInput from "../form/BaseInput";

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
      <h2 className="font-poppins text-2xl mb-4">Edit credentials</h2>
      <form className="flex flex-col gap-4">
        <BaseInput id="email" label="Email" placeholder="Enter your email" />
        <BaseInput
          type="password"
          id="currentPassword"
          label="Current password"
          placeholder="Enter your current password"
        />
        <BaseInput
          type="password"
          id="password"
          label="New password"
          placeholder="Choose your new password"
        />
        <BaseInput
          type="password"
          id="confirmPassword"
          label="Confirm new password"
          placeholder="Confirm your new password"
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

export default EditCredentials;
