import { SignedIn, SignedOut } from "@clerk/nextjs";

import Authorization from "@/components/Authorization";
import FooterNavColumn from "@/components/Footer/FooterNavColumn";

import { personalAreaLinks, primaryLinks, secondaryLinks } from "@/utils/links";

function FooterNavbar() {
  // Returned JSX
  return (
    <div className="flex flex-col sm:flex-row gap-8 sm:gap-24">
      <div>
        <h3 className="text-xl mb-2">Menu</h3>
        <div className="flex gap-14">
          <FooterNavColumn links={primaryLinks} />
          <FooterNavColumn links={secondaryLinks} />
        </div>
      </div>
      <div>
        <h3 className="text-xl mb-2">Personal Area</h3>
        <div>
          <SignedOut>
            <div className="flex sm:flex-col gap-2">
              <Authorization />
            </div>
          </SignedOut>
          <SignedIn>
            <FooterNavColumn links={personalAreaLinks} />
          </SignedIn>
        </div>
      </div>
    </div>
  );
}

export default FooterNavbar;
