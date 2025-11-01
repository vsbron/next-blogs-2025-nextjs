"use client";
import FormInput from "@/components/form/FormInput";
import { Button } from "@/components/ui/button";
import { SubmitButton } from "../form/Buttons";

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
        <FormInput id="email" placeholder="Enter your email" />
        <FormInput
          type="password"
          id="currentPassword"
          label="Current password"
          placeholder="Enter your current password"
        />
        <FormInput
          type="password"
          id="password"
          label="New password"
          placeholder="Choose your new password"
        />
        <FormInput
          type="password"
          id="confirmPassword"
          label="Confirm new password"
          placeholder="Confirm your new password"
        />
        <div className="flex gap-x-4 mt-4">
          <Button variant="outline" onClick={exitFn}>
            Cancel
          </Button>
        </div>
      </form>
    </>
  );
}

export default EditCredentials;
