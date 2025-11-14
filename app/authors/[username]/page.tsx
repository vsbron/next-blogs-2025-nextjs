import { Metadata } from "next";
import { Suspense } from "react";

import SectionTitle from "@/components/SectionTitle";
import BreadCrumbsAuthorPage from "@/components/breadcrumbs/BreadCrumbsAuthorPage";
import SkeletonArticle from "@/components/skeletons/SkeletonArticle";

import { fetchUser } from "@/utils/actions/users";
import { SITE_DOMAIN } from "@/utils/constants";
import SkeletonProfile from "@/components/skeletons/SkeletonProfile";
import DashboardProfile from "@/components/dashboard/DashboardProfile";
import ProfileDetails from "@/components/ProfileDetails";

// Interface for the User ID
interface UserPageProps {
  params: Promise<{ username: string }>;
}

// Generate metadata function
export async function generateMetadata({
  params,
}: UserPageProps): Promise<Metadata> {
  // Get the username from params and fetch the user
  const { username } = await params;
  const user = await fetchUser(username);

  // Guard clause
  if (!user) throw new Error("Author not found");

  // Returned Metadata
  return {
    title: `${user.displayName} - Author Profile`,
    description: `Explore posts, activity, and stats from ${user.displayName}.`,
    openGraph: {
      url: `${SITE_DOMAIN}/authors/${username}`,
      title: `${user.displayName} - Author Profile`,
      description: `Explore posts, activity, and stats from ${user.displayName}.`,
      ...(user.imageUrl && { images: [user.imageUrl] }),
    },
    twitter: {
      card: user.imageUrl ? "summary_large_image" : "summary",
      title: `${user.displayName} - Author Profile`,
      description: `Explore posts, activity, and stats from ${user.displayName}.`,
      ...(user.imageUrl && { images: [user.imageUrl] }),
    },
  };
}

// The page
async function UserPage({ params }: UserPageProps) {
  // Get the username from the params and fetch the user
  const { username } = await params;
  const user = await fetchUser(username);

  // Guard clause
  if (!user) throw new Error("Author not found");

  // Returned JSX
  return (
    <section>
      <BreadCrumbsAuthorPage />
      <SectionTitle>Author profile of {user.displayName}</SectionTitle>
      <Suspense fallback={<SkeletonProfile />}>
        <ProfileDetails user={user} />
      </Suspense>
    </section>
  );
}

export default UserPage;
