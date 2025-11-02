import Link from "next/link";

import ProfileDetails from "@/components/ProfileDetails";
import { ButtonsContainer } from "@/components/form/Buttons";
import { Button } from "@/components/ui/button";

import { fetchCurrentUser } from "@/utils/actions/users";

async function DashboardProfile() {
  // Get current user
  const user = await fetchCurrentUser();

  // Returned JSX
  return (
    <section>
      <ProfileDetails user={user!} />
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
