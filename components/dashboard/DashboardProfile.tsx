import Link from "next/link";
import { redirect } from "next/navigation";

import ProfileDetails from "@/components/Profile/ProfileDetails";
import { ButtonsContainer } from "@/components/form/Buttons";
import { Button } from "@/components/ui/button";

import { fetchCurrentUser } from "@/utils/actions/users";

async function DashboardProfile() {
  // Get current user
  const user = await fetchCurrentUser();

  // Guard clause
  if (!user) redirect("/");

  // Returned JSX
  return (
    <section>
      <ProfileDetails user={user} />
      <ButtonsContainer>
        <Button asChild>
          <Link href="/dashboard/profile/edit-credentials/">
            Change username/password
          </Link>
        </Button>
        <Button asChild>
          <Link href="/dashboard/profile/edit-profile/">
            Edit profile details
          </Link>
        </Button>
      </ButtonsContainer>
    </section>
  );
}

export default DashboardProfile;
