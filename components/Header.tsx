import Logo from "./Logo";
import Navbar from "./Navbar";
import ThemeToggle from "./ThemeToggle";
import Search from "./Search";
import Authentication from "./Authentication";

function Header() {
  // Returned JSX
  return (
    <header className="sticky top-0 z-100 shadow-xl bg-background dark:border-b dark:border-b-foreground-muted py-4">
      <div className="max-w-7xl flex justify-between gap-x-8 mx-auto">
        <Logo />
        <div className="flex gap-x-6 items-center">
          <Search />
          <Navbar />
          <ThemeToggle />
          <Authentication />
        </div>
      </div>
    </header>
  );
}

export default Header;
