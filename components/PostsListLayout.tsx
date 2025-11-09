function PostsListLayout({ children }: { children: React.ReactNode }) {
  // Returned JSX
  return <div className="flex flex-col gap-y-4">{children}</div>;
}

export default PostsListLayout;
