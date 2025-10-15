import Logo from "./Logo";
import Navbar from "./Navbar";
import ThemeToggle from "./ThemeToggle";
import Search from "./Search";

function Header() {
  // Returned JSX
  return (
    <header className="sticky top-0 z-100 shadow-xl dark:border-b dark:border-b-background py-4">
      <div className="max-w-7xl flex justify-between gap-x-8 mx-auto">
        <Logo />
        <div className="flex gap-x-6">
          <Search />
          <ThemeToggle />
          <Navbar />
        </div>
      </div>
    </header>
  );
}

export default Header;
