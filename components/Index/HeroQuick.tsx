import Link from "next/link";
import Image from "next/image";

import SectionTitle from "@/components/SectionTitle";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { limitPreview } from "@/utils/helpers";
import { PostPreview } from "@/utils/types";

function HeroQuick({ posts }: { posts: PostPreview[] }) {
  // Returned JSX
  return (
    <Card className="gap-0">
      <CardHeader>
        <SectionTitle as="h4" className="mb-0">
          Other Highlights
        </SectionTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3.5">
        {posts.map(({ title, preview, imageUrl, id }, i) => (
          <div key={id}>
            <Link
              href={`/posts/${id}`}
              className="grid grid-cols-[1fr_100px] justify-between items-center gap-4 hover:text-foreground/70 transition-colors duration-200"
            >
              <div>
                <h2 className="text-lg">{limitPreview(title, 27)}</h2>
                <p className="text-sm">{limitPreview(preview, 80)}</p>
              </div>
              <div className="relative w-full h-16">
                <Image
                  src={imageUrl}
                  fill
                  alt={title}
                  className="rounded-md object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  priority
                />
              </div>
            </Link>
            {i !== posts.length - 1 && (
              <div className="border-b border-border/50 mt-3.5" />
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default HeroQuick;
