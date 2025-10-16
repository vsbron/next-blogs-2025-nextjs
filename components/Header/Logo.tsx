import Link from "next/link";

function Logo() {
  // Returned JSX
  return (
    <Link href="/">
      <svg
        width="142"
        height="35"
        className="fill-primary relative top-0.5 hover:fill-primary-light transition-all dark:fill-white dark:hover:fill-muted-foreground"
      >
        <title>NextBlog</title>
        <use href="/logo.svg#logo"></use>
      </svg>
    </Link>
  );
}

export default Logo;
