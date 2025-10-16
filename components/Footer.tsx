import Container from "./Container";
import Copyrights from "./Footer/Copyrights";
import FooterNavbar from "./Footer/FooterNavbar";
import LegalInfo from "./Footer/LegalInfo";
import PoweredBy from "./Footer/PoweredBy";

function Footer() {
  // Returned JSX
  return (
    <footer className="bg-muted">
      <Container className="py-6">
        <FooterNavbar />
        <PoweredBy />
        <LegalInfo />
        <Copyrights />
      </Container>
    </footer>
  );
}

export default Footer;
