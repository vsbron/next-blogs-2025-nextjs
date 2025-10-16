import Container from "./Container";
import Copyrights from "./Footer/Copyrights";
import FooterNavbar from "./Footer/FooterNavbar";
import FooterSeparator from "./Footer/FooterSeparator";
import LegalInfo from "./Footer/LegalInfo";
import PoweredBy from "./Footer/PoweredBy";

function Footer() {
  // Returned JSX
  return (
    <footer className="bg-muted">
      <Container className="py-12 flex flex-col gap-y-4">
        <FooterNavbar />
        <FooterSeparator />
        <PoweredBy />
        <FooterSeparator />
        <div className="flex justify-between items-center">
          <Copyrights />
          <LegalInfo />
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
