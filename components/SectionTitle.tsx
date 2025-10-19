// Map of styles
const styles = {
  h1: "text-3xl sm:text-4xl mb-4",
  h2: "text-2xl sm:text-3xl",
  h3: "text-xl sm:text-2xl",
  h4: "text-lg sm:text-xl",
  h5: "text-base sm:text-lg",
  h6: "text-base",
};

// Props type
type SectionTitleProps = {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: string;
};

// The component
function SectionTitle({ as: Tag, children }: SectionTitleProps) {
  // Returned JSX
  return <Tag className={`font-poppins mb-3 ${styles[Tag]}`}>{children}</Tag>;
}

export default SectionTitle;
