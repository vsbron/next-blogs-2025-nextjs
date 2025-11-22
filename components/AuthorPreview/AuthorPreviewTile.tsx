import Link from "next/link";
import Image from "next/image";
import { cloneElement, ReactElement, ReactNode } from "react";

import { Card, CardContent } from "@/components/ui/card";

import { formatDate } from "@/utils/helpers";
import { UserPreview } from "@/utils/types";
import { Calendar, Flag, FilePenLine } from "lucide-react";
import defaultAvatar from "@/assets/defaultUser.png";

// Props type
type AuthorPreviewTileProps = {
  author: UserPreview;
};

// The component
function AuthorPreviewTile({ author }: AuthorPreviewTileProps) {
  // Destructure props and configure
  const { imageUrl, username, displayName, dateCreated, country, _count } =
    author;
  const href = `/authors/${username}`;
  const date = formatDate(dateCreated);

  // Returned JSX
  return (
    <Card className="overflow-hidden max-w-90 sm:max-w-full py-3 sm:py-6">
      <CardContent className="grid grid-cols-[100px_1fr] xl:grid-cols-[120px_1fr] items-center gap-4 px-4 sm:px-6">
        <Link
          href={href}
          className="relative h-25 w-25 xl:h-30 xl:w-30 rounded-2xl sm:rounded-3xl overflow-hidden group"
        >
          <Image
            src={imageUrl || defaultAvatar}
            fill
            alt={displayName}
            sizes="(max-width: 640px) 90vw, (max-width: 768px) 50vw, 33vw"
            className="object-cover sm:group-hover:scale-105 transition-transform duration-200"
            quality={80}
            priority
          />
        </Link>
        <div className="flex flex-col justify-between gap-1 truncate">
          <Link
            href={href}
            className="hover:opacity-70 transition-opacity duration-200"
          >
            <h2 className="xs:text-lg xl:text-xl leading-snug truncate">
              {displayName}
            </h2>
            <h3 className="text-foreground/60 xs:text-md xl:text-lg leading-snug truncate">
              {username}
            </h3>
          </Link>
          <div className="text-sm flex flex-col text-foreground/60">
            <AuthorPreviewStat icon={<Flag />}>
              {country || "Unknown"}
            </AuthorPreviewStat>

            <AuthorPreviewStat icon={<Calendar />}>{date}</AuthorPreviewStat>
            {_count && (
              <AuthorPreviewStat icon={<FilePenLine />}>
                {_count.posts}
              </AuthorPreviewStat>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Helper component props type
type AuthorPreviewStatProps = {
  icon: ReactElement<{ className?: string }>;
  children: ReactNode;
};

// Helper component
function AuthorPreviewStat({ icon, children }: AuthorPreviewStatProps) {
  // Clone the icon and apply a class
  const styledIcon = icon
    ? cloneElement(icon, { className: "w-3.5 h-3.5 stroke-primary" })
    : null;

  // Returned JSX
  return (
    <div className="flex items-center gap-2">
      {styledIcon}
      {children}
    </div>
  );
}

export default AuthorPreviewTile;
