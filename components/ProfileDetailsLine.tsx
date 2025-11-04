import { cloneElement, ReactElement } from "react";

// Props type
type ProfileDetailsLineProps = {
  label: string;
  children: React.ReactNode;
  className?: string;
  icon: ReactElement<{ className?: string }>;
  column?: boolean;
};

// The component
function ProfileDetailsLine({
  label,
  children,
  className,
  icon,
  column = false,
}: ProfileDetailsLineProps) {
  // Clone the icon and apply a class
  const styledIcon = icon
    ? cloneElement(icon, { className: "w-4.5 h-4.5" })
    : null;

  // Returned JSX
  return (
    <div className={`flex ${column ? "flex-col" : "items-end"}  ${className}`}>
      <div className="flex items-center gap-x-1.5">
        {styledIcon}
        <span className="w-30 font-semibold">{label}:</span>
      </div>
      <span>{children}</span>
    </div>
  );
}

export default ProfileDetailsLine;
