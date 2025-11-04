type ArticleLAyoutProps = {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
};

function ArticleLayout({ children, sidebar }: ArticleLAyoutProps) {
  // Returned JSX
  return (
    <div className="grid lg:grid-cols-[2.5fr_1fr] xl:grid-cols-[2fr_1fr] gap-12">
      <article>{children}</article>
      {sidebar && <aside>{sidebar}</aside>}
    </div>
  );
}

export default ArticleLayout;
