function AuthorsGridLayout({ children }: { children: React.ReactNode }) {
  // Returned JSX
  return (
    <div className="grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 lg:gap-x-6 gap-y-6">
      {children}
    </div>
  );
}

export default AuthorsGridLayout;
