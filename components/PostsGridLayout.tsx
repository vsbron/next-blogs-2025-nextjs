function PostsGridLayout({ children }: { children: React.ReactNode }) {
  // Returned JSX
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-4 lg:gap-x-6 gap-y-6">
      {children}
    </div>
  );
}

export default PostsGridLayout;
