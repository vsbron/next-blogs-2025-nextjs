import Copyrights from "./Footer/Copyrights";
import FooterNavbar from "./Footer/FooterNavbar";
import LegalInfo from "./Footer/LegalInfo";
import PoweredBy from "./Footer/PoweredBy";

function Footer() {
  // Returned JSX
  return (
    <footer className="bg-muted">
      <div className="max-w-7xl mx-auto py-6">
        <FooterNavbar />
        <PoweredBy />
        <LegalInfo />
        <Copyrights />
      </div>
    </footer>
  );
}

export default Footer;
