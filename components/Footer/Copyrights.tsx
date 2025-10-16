function Copyrights() {
  // Returned JSX
  return (
    <div>
      <svg width="121" height="30" className="fill-foreground/90">
        <title>NextBlog</title>
        <use href="/logo.svg#logo"></use>
      </svg>
      <div className="text-sm">
        Built by VSBroN as a portfolio project.
        <br />
        This project is available on{" "}
        <a
          href="https://github.com/vsbron/next-blog-2025-nextjs"
          target="_blank"
          className="underline hover:no-underline"
        >
          GitHub
        </a>
        .
        <br />
        &copy;{new Date().getFullYear()}. All rights reserved.
      </div>
    </div>
  );
}

export default Copyrights;
