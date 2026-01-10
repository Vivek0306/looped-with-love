const Footer = () => {
  return (
    <>
            {/* Call to Action Section */}
      <section className="py-5" style={{ backgroundColor: 'var(--lwl-peach)' }}>
        <div className="container text-center">
          <h2 className="fw-bold mb-3" style={{ fontFamily: 'Caveat, cursive', fontSize: '64px', color: 'var(--lwl-dark)' }}>Ready to Order?</h2>
          <p className="text-muted mx-auto mb-4" style={{ maxWidth: "600px" }}>
            Browse our full collection on Instagram and send us a message to place 
            your order. Custom requests are always welcome!
          </p>
          <a 
            href="https://www.instagram.com/_looped_with_love_/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
            style={{ fontFamily: 'Caveat, cursive', fontSize: '24px', color: 'var(--lwl-dark)' }}
          >
            Visit Our Instagram
          </a>
        </div>
      </section>
          <footer className="border-top mt-5 py-4">
      <div className="container text-center">
        <a href="https://www.instagram.com/_looped_with_love_/" className="text-decoration-none" target="_blank" rel="noopener noreferrer">
            <p className="mb-1 fw-medium" style={{ color: 'var(--lwl-rose)' }}>
            © {new Date().getFullYear()} Looped With Love
            </p>
        </a>
        <p className="mb-0 text-muted small">
          <span>Made with <a href="https://in.linkedin.com/in/vivek-nair03" className="text-decoration-none">❤️</a>, one stitch at a time</span>
        </p>
      </div>
    </footer>
    </>
  );

};

export default Footer;
