import Container from "./Container";
import Copyrights from "./Footer/Copyrights";
import FooterNavbar from "./Footer/FooterNavbar";
import FooterSeparator from "./Footer/FooterSeparator";
import FooterSocials from "./Footer/FooterSocials";
import LegalInfo from "./Footer/LegalInfo";
import PoweredBy from "./Footer/PoweredBy";

function Footer() {
  // Returned JSX
  return (
    <footer className="bg-muted">
      <Container className="py-12 flex flex-col gap-y-4">
        <div className="grid grid-cols-[500px_1fr] items-start">
          <FooterNavbar />
          <FooterSocials />
        </div>
        <FooterSeparator />
        <div className="grid grid-cols-[500px_1fr] items-start">
          <PoweredBy />
          <LegalInfo />
        </div>
        <FooterSeparator />
        <Copyrights />
      </Container>
    </footer>
  );
}

export default Footer;
