import { Metadata } from "next";

import SectionTitle from "@/components/SectionTitle";
import EditCredentials from "@/components/dashboard/EditCredentials";

// Metadata
export const metadata: Metadata = {
  title: "Edit credentials",
  description: "Update your email and password for the account",
};

// The page
function EditCredentialsPage() {
  // Returned JSX
  return (
    <>
      <SectionTitle>Edit credentials</SectionTitle>
      <EditCredentials />
    </>
  );
}

export default EditCredentialsPage;
