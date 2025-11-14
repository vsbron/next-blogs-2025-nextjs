import { redirect } from "next/navigation";
import ProfileInfo from "@/components/Profile/ProfileInfo";
import { fetchCurrentUser } from "@/utils/actions/users";

async function DashboardProfile() {
  // Get current user
  const user = await fetchCurrentUser();

  // Guard clause
  if (!user) redirect("/");

  // Returned JSX
  return (
    <section>
      <ProfileInfo user={user} editBtns={true} />
    </section>
  );
}

export default DashboardProfile;
