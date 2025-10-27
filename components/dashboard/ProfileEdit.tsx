import { User } from "@prisma/client";

function ProfileEdit({ user }: { user: User }) {
  // Destructure the user
  const { avatarUrl, displayName, email, id, bio, dateCreated, username } =
    user;

  // Returned JSX
  return (
    <>
      <h2 className="text-3xl">Under construction</h2>
    </>
  );
}

export default ProfileEdit;
