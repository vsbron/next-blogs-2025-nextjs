// Map of styles
const styles = {
  h1: "text-4xl mb-1",
  h2: "text-3xl mb-1",
  h3: "text-2xl mb-1",
  h4: "text-xl mb-1",
  h5: "text-lg mb-1",
  h6: "text-base mb-1",
};

// Props type
type SectionTitleProps = {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: string;
};

// The component
function SectionTitle({ as: Tag, children }: SectionTitleProps) {
  // Returned JSX
  return <Tag className={`font-poppins ${styles[Tag]}`}>{children}</Tag>;
}

export default SectionTitle;
