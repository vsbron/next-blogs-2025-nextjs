// Classes for BEFORE element
const beforeElement = `before:content-[""] before:absolute before:bg-accent before:rounded-md before:sm:rounded-lg before:left-0 before:top-1.5`;

// Map of main styles
const styles = {
  h1: "text-3xl sm:text-4xl mb-5 pl-9 sm:pl-10 before:h-6.5 before:w-6.5 before:sm:h-7 before:sm:w-7",
  h2: "text-2xl sm:text-3xl mb-4 pl-7.5 sm:pl-8 before:h-5.5 before:w-5.5 before:sm:h-6 before:sm:w-6",
  h3: "text-xl sm:text-2xl mb-3 pl-6 sm:pl-8 before:h-[17px] before:w-[17px] before:sm:h-5.5 before:sm:w-5.5",
  h4: "text-lg sm:text-xl mb-3 pl-5 sm:pl-7 before:h-[15px] before:w-[15px] before:sm:h-4.5 before:sm:w-4.5",
  h5: "text-base sm:text-lg mb-3 pl-8",
  h6: "text-base mb-2 pl-8",
};

// Props type
type SectionTitleProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
};

// The component
function SectionTitle({
  as: Tag = "h1",
  children,
  className,
}: SectionTitleProps) {
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
