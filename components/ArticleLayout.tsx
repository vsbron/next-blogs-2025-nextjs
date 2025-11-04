function ArticleLayout({ children }: { children: React.ReactNode }) {
  // Returned JSX
  return <div className="grid grid-cols-[2fr_1fr] gap-12">{children}</div>;
}

export default ArticleLayout;
