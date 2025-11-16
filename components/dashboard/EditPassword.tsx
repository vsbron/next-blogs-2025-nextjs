import type { useUser } from "@clerk/nextjs";
import FormInput from "@/components/form/FormInput";

// Props type
type ClerkUser = ReturnType<typeof useUser>["user"];

// The component
function EditPassword({ user }: { user: ClerkUser }) {
  // Returned JSX
  return (
    <div className="basic-form">
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
    </div>
  );
}

export default EditPassword;
