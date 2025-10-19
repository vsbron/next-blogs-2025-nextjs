import Link from "next/link";
import Image from "next/image";
import { EyeIcon, ThumbsUpIcon } from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import SectionTitle from "./SectionTitle";

import AIImg from "@/assets/article-ai.jpg";
import CityImg from "@/assets/article-city.jpg";
import VegetablesImg from "@/assets/article-vegetables.jpg";
import { Button } from "./ui/button";

function SecondaryPosts() {
  // Returned JSX
  return (
    <section>
      <SectionTitle as="h2">Secondary posts</SectionTitle>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-6 lg:gap-x-8 gap-y-8">
        <Card className="p-0 rounded-lg overflow-hidden gap-0">
          <CardHeader className="w-full h-48 sm:h-60 relative">
            <Link href="/">
              <Image src={CityImg} fill alt="City" className="object-cover" />
            </Link>
          </CardHeader>
          <CardContent className="p-6 pt-4">
            <h3 className="text-lg sm:text-xl leading-tight font-poppins">
              How to survive in a huge city
            </h3>
            <div className="flex gap-x-5 mb-2 items-center text-muted-foreground/60 text-sm">
              <div className="text-accent font-bold">
                <Link href="/" className="">
                  username
                </Link>
              </div>
              <div className="flex items-center gap-x-1">
                <EyeIcon className="w-4 h-4 mt-0.5" />
                12
              </div>
              <div className="flex items-center gap-x-1">
                <ThumbsUpIcon className="w-4 h-4" />3
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              doloribus consequuntur autem non temporibus sit magnam rerum omnis
              aperiam.
              <br />
              <Button size="sm" className="mt-4" asChild>
                <Link href="/" className="link-primary">
                  Read more
                </Link>
              </Button>
            </p>
          </CardContent>
        </Card>
        <Card className="p-0 rounded-lg overflow-hidden gap-0">
          <CardHeader className="w-full h-48 sm:h-60 relative">
            <Link href="/">
              <Image src={AIImg} fill alt="AI" className="object-cover" />
            </Link>
          </CardHeader>
          <CardContent className="p-6 pt-4">
            <h3 className="text-lg sm:text-xl leading-tight font-poppins">
              AI solved another major problem
            </h3>
            <div className="flex gap-x-5 mb-2 items-center text-muted-foreground/60 text-sm">
              <div className="text-accent font-bold">
                <Link href="/" className="">
                  username
                </Link>
              </div>
              <div className="flex items-center gap-x-1">
                <EyeIcon className="w-4 h-4 mt-0.5" />3
              </div>
              <div className="flex items-center gap-x-1">
                <ThumbsUpIcon className="w-4 h-4" />0
              </div>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
              error consequatur, quis nisi illum ullam fugiat voluptatum
              molestiae debitis.
              <br />
              <Button size="sm" className="mt-4" asChild>
                <Link href="/" className="link-primary">
                  Read more
                </Link>
              </Button>
            </p>
          </CardContent>
        </Card>
        <Card className="p-0 rounded-lg overflow-hidden gap-0 sm:hidden md:block">
          <CardHeader className="w-full h-48 sm:h-60 relative">
            <Link href="/">
              <Image
                src={VegetablesImg}
                fill
                alt="Vegetables"
                className="object-cover"
              />
            </Link>
          </CardHeader>
          <CardContent className="p-6 pt-4">
            <h3 className="text-lg sm:text-xl leading-tight font-poppins">
              Eat HEALTHY!
            </h3>
            <div className="flex gap-x-5 mb-2 items-center text-muted-foreground/60 text-sm">
              <div className="text-accent font-bold">
                <Link href="/" className="">
                  username
                </Link>
              </div>
              <div className="flex items-center gap-x-1">
                <EyeIcon className="w-4 h-4 mt-0.5" />
                10
              </div>
              <div className="flex items-center gap-x-1">
                <ThumbsUpIcon className="w-4 h-4" />1
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              doloribus consequuntur autem non temporibus sit magnam rerum omnis
              aperiam.
              <br />
              <Button size="sm" className="mt-4" asChild>
                <Link href="/" className="link-primary">
                  Read more
                </Link>
              </Button>
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default SecondaryPosts;
