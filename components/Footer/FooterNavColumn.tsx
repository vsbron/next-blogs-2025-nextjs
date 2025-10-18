import Link from "next/link";

// Type props
type FooterNavColumnProps = {
  links: { label: string; href: string }[];
};

// The component
function FooterNavColumn({ links }: FooterNavColumnProps) {
  // Returned JSX
  return (
    <nav className="flex flex-col gap-y-0.5">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className="text-primary hover:text-primary-light"
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}

export default FooterNavColumn;
