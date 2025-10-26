import { redirect } from "next/navigation";

export default function DashboardPage() {
  // Redirect to dashboard/profile
  redirect("/dashboard/profile");
}
