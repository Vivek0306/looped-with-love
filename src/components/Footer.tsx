const Footer = () => {
  return (
    <footer className="border-top mt-5 py-4">
      <div className="container text-center">
        <a href="https://www.instagram.com/_looped_with_love_/" className="text-decoration-none" target="_blank" rel="noopener noreferrer">
            <p className="mb-1 fw-medium" style={{ color: 'var(--lwl-rose)' }}>
            © {new Date().getFullYear()} Looped With Love
            </p>
        </a>
        <p className="mb-0 text-muted small">
          <span>Made with love, one stitch at a time</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
