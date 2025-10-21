// Map of styles
const styles = {
  h1: "text-3xl sm:text-4xl mb-5 pl-9 sm:pl-10",
  h2: "text-2xl sm:text-3xl mb-4 pl-7.5 sm:pl-8",
  h3: "text-xl sm:text-2xl mb-3 pl-8",
  h4: "text-lg sm:text-xl mb-3 pl-8",
  h5: "text-base sm:text-lg mb-3 pl-8",
  h6: "text-base mb-2 pl-8",
};

// Props type
type SectionTitleProps = {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
};

// The component
function SectionTitle({ as: Tag, children, className }: SectionTitleProps) {
  // Classes for BEFORE element
  const beforeElement = `before:content-[""] before:absolute before:bg-accent before:rounded-lg before:left-0 before:top-1.5 ${
    Tag === "h1"
      ? "before:h-6.5 before:w-6.5 before:sm:h-7 before:sm:w-7"
      : "before:h-5.5 before:w-5.5 before:sm:h-6 before:sm:w-6"
  }`;

  // Returned JSX
  return (
    <Tag
      className={`font-poppins relative ${styles[Tag]} ${className} ${beforeElement}`}
    >
      {children}
    </Tag>
  );
}

export default SectionTitle;
