import Container from "@/components/Container";
import Copyrights from "@/components/Footer/Copyrights";
import FooterNavbar from "@/components/Footer/FooterNavbar";
import FooterSeparator from "@/components/Footer/FooterSeparator";
import FooterSocials from "@/components/Footer/FooterSocials";
import LegalInfo from "@/components/Footer/LegalInfo";
import PoweredBy from "@/components/Footer/PoweredBy";

function Footer() {
  // Returned JSX
  return (
    <footer className="bg-muted">
      <Container className="py-12 flex flex-col gap-y-4">
        <div className="grid lg:grid-cols-[600px_1fr] items-start gap-8">
          <FooterNavbar />
          <FooterSocials />
        </div>
        <FooterSeparator />
        <div className="grid xl:grid-cols-[600px_1fr] items-start gap-8">
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
