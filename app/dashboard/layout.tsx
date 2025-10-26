import Navigation from "@/components/dashboard/Navigation";

function layout({ children }: { children: React.ReactNode }) {
  // Returned JSX
  return (
    <div>
      <Navigation />
      <div>{children}</div>
    </div>
  );
}

export default layout;
