type ArticleLAyoutProps = {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
};

function ArticleLayout({ children, sidebar }: ArticleLAyoutProps) {
  // Returned JSX
  return (
    <div className="grid grid-cols-[2fr_1fr] gap-12">
      <article>{children}</article>
      {sidebar && <aside>{sidebar}</aside>}
    </div>
  );
}

export default ArticleLayout;
