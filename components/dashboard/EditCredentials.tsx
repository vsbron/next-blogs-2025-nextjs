import Link from "next/link";

import { SubmitButton } from "@/components/form/Buttons";
import FormInput from "@/components/form/FormInput";
import { Button } from "@/components/ui/button";

// The component
function EditCredentials() {
  // Returned JSX
  return (
    <section>
      <form className="basic-form">
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
        <div className="flex gap-4 items-center mt-2">
          <Button variant="outline" asChild>
            <Link href="/dashboard/profile/">Go Back</Link>
          </Button>
          <SubmitButton text="Update credentials" isPending={false} />
        </div>
      </form>
    </section>
  );
}

export default EditCredentials;
