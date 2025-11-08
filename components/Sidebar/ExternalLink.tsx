"use client";

// Props type
type ExternalLinkProps = {
  url: string;
  children: React.ReactNode;
};

// The component
function ExternalLink({ url, children }: ExternalLinkProps) {
  // Returned link
  return (
    <a
      href={url}
      onClick={(e) => {
        e.preventDefault();
        window.open(
          url,
          "popupWindow",
          "width=500,height=400,scrollbars=yes,resizable=yes"
        );
      }}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export default ExternalLink;
