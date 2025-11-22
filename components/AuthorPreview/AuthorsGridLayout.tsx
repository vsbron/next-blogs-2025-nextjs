function AuthorsGridLayout({ children }: { children: React.ReactNode }) {
  // Returned JSX
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {children}
    </div>
  );
}

export default AuthorsGridLayout;
