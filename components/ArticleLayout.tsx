function ArticleLayout({ children }: { children: React.ReactNode }) {
  // Returned JSX
  return <article className="max-w-4xl">{children}</article>;
}

export default ArticleLayout;
