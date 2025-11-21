import Link from "next/link";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

import { UserPreview } from "@/utils/types";

import defaultAvatar from "@/assets/defaultUser.png";
import { formatDate } from "@/utils/helpers";

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
  console.log(author);

  // Returned JSX
  return (
    <Card className="overflow-hidden">
      <CardContent className="text-center">
        <Link href={href} className="mb-3">
          <div className="relative h-30 sm:h-40 sm:w-40 mx-auto rounded-full group overflow-hidden mb-2">
            <Image
              src={imageUrl || defaultAvatar}
              fill
              alt={displayName}
              sizes="(max-width: 640px) 90vw, (max-width: 768px) 50vw, 33vw"
              className="object-cover sm:group-hover:scale-102 transition-transform duration-300 ease-out"
              quality={80}
              priority
            />
          </div>
          <div className="text-center flex flex-col gap-0 mb-2">
            <h2 className="xs:text-lg md:text-xl leading-snug">
              {displayName}
            </h2>
            <h3 className="text-foreground/50 xs:text-md md:text-lg leading-snug">
              {username}
            </h3>
          </div>
          <div className="text-sm text-foreground/50">
            {country && `From ${country}`}
            <br />
            Registered: {date}
            <br />
            Total posts: {_count.posts}
          </div>
        </Link>
      </CardContent>
    </Card>
  );
}

export default AuthorPreviewTile;
