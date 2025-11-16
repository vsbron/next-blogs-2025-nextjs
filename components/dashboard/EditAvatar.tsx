import type { useUser } from "@clerk/nextjs";

// Props type
type ClerkUser = ReturnType<typeof useUser>["user"];

// The component
function EditAvatar({ user }: { user: ClerkUser }) {
  // Returned JSX
  return <div>EditAvatar</div>;
}

export default EditAvatar;
