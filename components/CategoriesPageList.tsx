import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CATEGORIES_FULL } from "@/utils/constants";

function CategoriesPageList() {
  // Returned JSX
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 xs:gap-8">
      {CATEGORIES_FULL.map(({ name, description }) => (
        <Card key={name} className="max-xs:p-3 gap-0">
          <CardHeader className="max-xs:px-1 max-xs:-mb-2">
            <Link
              href={`/posts?category=${encodeURIComponent(name)}`}
              className="link-primary"
            >
              <h2 className="text-lg xs:text-xl lg:text-2xl">{name}</h2>
            </Link>
          </CardHeader>
          <CardContent className="max-xs:px-1">
            <p className="text-sm xs:text-md lg:text-lg">{description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default CategoriesPageList;
