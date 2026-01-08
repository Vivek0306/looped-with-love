const Footer = () => {
  return (
    <footer className="border-top mt-5 py-4">
      <div className="container text-center">
        <p className="mb-1 fw-medium">
          © {new Date().getFullYear()} Looped With Love
        </p>

        <p className="mb-0 text-muted small">
          <span>Made with love, one stitch at a time</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
