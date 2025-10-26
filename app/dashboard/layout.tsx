import { Metadata } from "next";

import Navigation from "@/components/dashboard/Navigation";

// Metadata for all dashboard pages
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

// The layout
function layout({ children }: { children: React.ReactNode }) {
  // Returned JSX
  return (
    <div className="flex flex-col gap-y-8">
      <Navigation />
      <div>{children}</div>
    </div>
  );
}

export default layout;
