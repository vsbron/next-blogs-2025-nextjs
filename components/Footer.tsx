import Copyrights from "./Footer/Copyrights";
import LegalInfo from "./Footer/LegalInfo";
import Navbar from "./Footer/Navbar";
import PoweredBy from "./Footer/PoweredBy";

function Footer() {
  // Returned JSX
  return (
    <footer className="bg-muted">
      <div className="max-w-7xl mx-auto py-6">
        <Navbar />
        <PoweredBy />
        <LegalInfo />
        <Copyrights />
      </div>
    </footer>
  );
}

export default Footer;
