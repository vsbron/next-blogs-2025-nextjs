function Copyrights() {
  // Returned JSX
  return (
    <div>
      <div className="font-poppins text-xl">
        Next<span className="font-semibold">BLOG</span>
      </div>
      <div>
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
