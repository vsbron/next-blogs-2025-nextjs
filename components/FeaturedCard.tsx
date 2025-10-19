import Image from "next/image";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SectionTitle from "./SectionTitle";

import LionImg from "@/assets/article-lion.jpg";
import UFOImg from "@/assets/article-ufo.jpg";
import Link from "next/link";
import { EyeIcon, ThumbsUpIcon } from "lucide-react";

function FeaturedCard() {
  // Returned JSX
  return (
    <section>
      <SectionTitle as="h1">Featured posts</SectionTitle>
      <div className="grid sm:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-8">
        <Card className="p-0 rounded-lg overflow-hidden gap-0">
          <CardHeader className="w-full h-80 relative">
            <Link href="/">
              <Image src={LionImg} fill alt="Lion" className="object-cover" />
            </Link>
          </CardHeader>
          <CardContent className="p-6 pt-4">
            <h2 className="text-2xl font-poppins">Why Lions are awesome?</h2>
            <div className="flex gap-x-5 mb-1 items-center text-muted-foreground/60 text-sm">
              <div>
                by{" "}
                <Link href="/" className="text-muted-foreground">
                  username
                </Link>
              </div>
              <div className="flex items-center gap-x-1">
                <EyeIcon className="w-4 h-4 mt-0.5" />
                20
              </div>
              <div className="flex items-center gap-x-1">
                <ThumbsUpIcon className="w-4 h-4" />4
              </div>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
              error consequatur, quis nisi illum ullam fugiat voluptatum
              molestiae debitis.
              <br />
              <Link href="/" className="link-primary">
                Read more...
              </Link>
            </p>
          </CardContent>
        </Card>
        <Card className="p-0 rounded-lg overflow-hidden gap-0">
          <CardHeader className="w-full h-80 relative">
            <Link href="/">
              <Image src={UFOImg} fill alt="UFO" className="object-cover" />
            </Link>
          </CardHeader>
          <CardContent className="p-6 pt-4">
            <h2 className="text-2xl font-poppins">
              We are not alone in this world
            </h2>
            <div className="flex gap-x-5 mb-1 items-center text-muted-foreground/60 text-sm">
              <div>
                by{" "}
                <Link href="/" className="text-muted-foreground">
                  username
                </Link>
              </div>
              <div className="flex items-center gap-x-1">
                <EyeIcon className="w-4 h-4 mt-0.5" />
                15
              </div>
              <div className="flex items-center gap-x-1">
                <ThumbsUpIcon className="w-4 h-4" />2
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              doloribus consequuntur autem non temporibus sit magnam rerum omnis
              aperiam.
              <br />
              <Link href="/" className="link-primary">
                Read more...
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default FeaturedCard;
