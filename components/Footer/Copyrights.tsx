function Copyrights() {
  // Returned JSX
  return (
    <div className="flex items-center gap-x-4 text-sm">
      <svg width="121" height="30" className="fill-foreground/90">
        <title>NextBlog</title>
        <use href="/logo.svg#logo"></use>
      </svg>
      <span className="inline-block ml-2">
        Built by VSBroN as a portfolio{" "}
        <a
          href="https://github.com/vsbron/next-blog-2025-nextjs"
          target="_blank"
          className="underline hover:no-underline"
        >
          project
        </a>
        .
      </span>
      <span>&copy;{new Date().getFullYear()}. All rights reserved.</span>
    </div>
  );
}

export default Copyrights;
