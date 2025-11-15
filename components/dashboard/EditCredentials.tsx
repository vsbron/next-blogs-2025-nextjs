import Link from "next/link";

import { ButtonsContainer, SubmitButton } from "@/components/form/Buttons";
import FormInput from "@/components/form/FormInput";
import { Button } from "@/components/ui/button";
import { Card } from "../ui/card";

// The component
function EditCredentials() {
  // Returned JSX
  return (
    <section>
      <Card className="px-8 py-6 max-w-[450px]">
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
          <ButtonsContainer>
            <Button variant="outline" asChild>
              <Link href="/dashboard/profile/">Go Back</Link>
            </Button>
            <SubmitButton text="Update credentials" isPending={false} />
          </ButtonsContainer>
        </form>
      </Card>
    </section>
  );
}

export default EditCredentials;
