// Map of styles
const styles = {
  h1: "text-3xl sm:text-4xl mb-5",
  h2: "text-2xl sm:text-3xl mb-4",
  h3: "text-xl sm:text-2xl mb-3",
  h4: "text-lg sm:text-xl mb-3",
  h5: "text-base sm:text-lg mb-3",
  h6: "text-base mb-2",
};

// Props type
type SectionTitleProps = {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: string;
  className?: string;
};

// The component
function SectionTitle({ as: Tag, children, className }: SectionTitleProps) {
  // Returned JSX
  return (
    <Tag className={`font-poppins ${styles[Tag]} ${className}`}>{children}</Tag>
  );
}

export default SectionTitle;
