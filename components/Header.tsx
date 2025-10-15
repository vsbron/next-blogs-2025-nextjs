import Logo from "./Logo";
import Navbar from "./Navbar";
import Search from "./Search";

function Header() {
  // Returned JSX
  return (
    <header>
      <div className="max-w-7xl flex justify-between gap-x-8 mx-auto">
        <Logo />
        <div className="flex gap-x-6">
          <Search />
          <Navbar />
        </div>
      </div>
    </header>
  );
}

export default Header;
