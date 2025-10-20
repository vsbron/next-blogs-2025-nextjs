import Link from "next/link";

function Logo() {
  // Returned JSX
  return (
    <Link href="/">
      <svg className="fill-primary relative top-0.5 hover:fill-primary-light transition-all dark:fill-foreground dark:hover:fill-muted-foreground w-[122px] h-[30px] sm:w-[142px] sm:h-[35px]">
        <title>NextBlogs</title>
        <use href="/logo.svg#logo"></use>
      </svg>
    </Link>
  );
}

export default Logo;
