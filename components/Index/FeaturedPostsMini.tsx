/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import Image from "next/image";

import SectionTitle from "../SectionTitle";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { limitPreview } from "@/utils/helpers";
import UFOImg from "@/assets/article-ufo.jpg";

function FeaturedPostsMini({ articles }: { articles: any[] }) {
  // Returned JSX
  return (
    <Card className="gap-0 py-0 bg-0 border-0 rounded-none shadow-none">
      <CardHeader>
        <SectionTitle as="h4" className="mb-0">
          Quick links
        </SectionTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {articles.map(({ title, href, preview }, i) => (
          <div key={href}>
            <Link
              href={href}
              className="grid grid-cols-[1fr_100px] justify-between items-center gap-2"
            >
              <div>
                <h2 className="text-lg">{limitPreview(title, 31)}</h2>
                <p className="text-sm">{limitPreview(preview, 80)}</p>
              </div>
              <div className="relative w-full h-16">
                <Image
                  src={UFOImg}
                  fill
                  alt={title}
                  className="rounded-md object-cover"
                />
              </div>
            </Link>
            {i !== articles.length - 1 && (
              <div className="border-b border-border/50 mt-4" />
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default FeaturedPostsMini;
