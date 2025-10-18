function FooterSocials() {
  // Returned JSX
  return (
    <div>
      <h3 className="font-poppins text-xl mb-1">Socials</h3>
      <div className="flex flex-col">
        <div>
          <a
            href="https://facebook.com/"
            rel="noreferrer"
            target="_blank"
            className="text-primary hover:text-primary-light"
          >
            Facebook
          </a>
        </div>
        <div>
          <a
            href="https://x.com/"
            rel="noreferrer"
            target="_blank"
            className="text-primary hover:text-primary-light"
          >
            X (Twitter)
          </a>
        </div>
        <div>
          <a
            href="https://instagram.com"
            rel="noreferrer"
            target="_blank"
            className="text-primary hover:text-primary-light"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

export default FooterSocials;
