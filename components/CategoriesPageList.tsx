import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CATEGORIES_FULL } from "@/utils/constants";

function CategoriesPageList() {
  // Returned JSX
  return (
    <div className="grid grid-cols-3 gap-8">
      {CATEGORIES_FULL.map(({ name, description }) => (
        <Card key={name} className="gap-0">
          <CardHeader>
            <Link
              href={`/posts?category=${encodeURIComponent(name)}`}
              className="link-primary"
            >
              <h2 className="text-2xl">{name}</h2>
            </Link>
          </CardHeader>
          <CardContent>
            <p className="text-lg">{description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default CategoriesPageList;
