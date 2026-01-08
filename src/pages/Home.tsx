const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-5" style={{ backgroundColor: 'var(--lwl-white)' }}>
        <div className="container text-center">
            <h1 className="fw-bold mb-3 hero-title">
                Looped With Love
            </h1>
            <img
                src="lwl_pfp.jpg"
                alt="Handmade crochet products"
                className="img-fluid mb-4"
                style={{
                maxWidth: "700px",
                borderRadius: "24px",
                }}
            />
          <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
            Discover thoughtfully handcrafted crochet pieces made with patience,
            creativity, and care. Each item is uniquely designed to add warmth
            and charm to your everyday life.
          </p>
        </div>
      </section>

      {/* Intro / Highlight Section */}
      <section className="py-5" style={{ backgroundColor: 'var(--lwl-peach)' }}>
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <h5 className="fw-semibold" style={{ fontFamily: 'Caveat, cursive', fontSize: '44px', color: 'var(--lwl-dark)' }}>Handmade</h5>
              <p className="text-muted small">
                Every piece is carefully crocheted by hand with attention to
                detail.
              </p>
            </div>

            <div className="col-md-4 mb-4">
              <h5 className="fw-semibold" style={{ fontFamily: 'Caveat, cursive', fontSize: '44px', color: 'var(--lwl-dark)' }}>Made with Love</h5>
              <p className="text-muted small">
                Crafted slowly and mindfully, not mass-produced.
              </p>
            </div>

            <div className="col-md-4 mb-4">
              <h5 className="fw-semibold" style={{ fontFamily: 'Caveat, cursive', fontSize: '44px', color: 'var(--lwl-dark)' }}>Custom Orders</h5>
              <p className="text-muted small">
                Personalised colours and designs available on request.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Crochet Bouquets - Image Left - Content Right */}
      <section className="py-5" style={{ backgroundColor: 'var(--lwl-white)' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0 text-center">
              <img
                src="bouqet.webp"
                alt="Crochet flower bouquets"
                className="img-fluid"
                style={{ 
                  borderRadius: "24px",
                  width: "450px",
                  height: "500px",
                  objectFit: "cover",
                  aspectRatio: "1/1",
                  boxShadow: '0 4px 20px rgba(212, 165, 154, 0.2)'
                }}
              />
            </div>
            <div className="col-md-6 ps-md-5">
              <h2 className="fw-bold mb-3" style={{ fontFamily: 'Pacifico, cursive', fontSize: '54px', color: 'var(--lwl-dark)' }}>Blooms That Never Fade</h2>
              <p className="text-muted mb-4">
                Handcrafted crochet bouquets featuring sunflowers, tulips, and lavender. 
                Perfect for gifting your loved ones — <strong>forever flowers for your forever person.</strong>
              </p>
              <a href="#gallery" className="btn btn-primary" style={{ fontFamily: 'Caveat, cursive', fontSize: '24px', color: 'var(--lwl-dark)' }}>
                Browse Bouquets
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Baby Items - Content Left - Image Right */}
      <section className="py-5" style={{ backgroundColor: 'var(--lwl-blush)' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0 order-md-2 text-center">
              <img
                src="baby_shoes.jpg"
                alt="Custom baby crochet items"
                className="img-fluid"
                style={{ 
                  borderRadius: "24px",
                  width: "450px",
                  height: "500px",
                  objectFit: "cover",
                  aspectRatio: "1/1",
                  boxShadow: '0 4px 20px rgba(212, 165, 154, 0.2)'
                }}
              />
            </div>
            <div className="col-md-6 pe-md-5 order-md-1">
              <h2 className="fw-bold mb-3" style={{ fontFamily: 'Pacifico, cursive', fontSize: '54px', color: 'var(--lwl-dark)' }}>Little Treasures for Tiny Humans</h2>
              <p className="text-muted mb-4">
                Custom baby essentials including bibs, rattles, cuddly bears, and tiny booties. 
                Made with baby-safe yarn — <strong>first smiles deserve handmade love.</strong>
              </p>
              <a href="#gallery" className="btn btn-primary" style={{ fontFamily: 'Caveat, cursive', fontSize: '24px', color: 'var(--lwl-dark)' }}>
                Shop Baby Collection
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Crochet Figures - Image Left - Content Right */}
      <section className="py-5" style={{ backgroundColor: 'var(--lwl-white)' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0 text-center">
              <img
                src="heart_bear.jpg"
                alt="Snuggly crochet teddy bears"
                className="img-fluid"
                style={{ 
                  borderRadius: "24px",
                  width: "450px",
                  height: "500px",
                  objectFit: "cover",
                  aspectRatio: "1/1",
                  boxShadow: '0 4px 20px rgba(212, 165, 154, 0.2)'
                }}
              />
            </div>
            <div className="col-md-6 ps-md-5">
              <h2 className="fw-bold mb-3" style={{ fontFamily: 'Pacifico, cursive', fontSize: '54px', color: 'var(--lwl-dark)' }}>Snuggle Buddies Made to Hug</h2>
              <p className="text-muted mb-4">
                Custom crochet bears and plush figures crafted with extra softness. 
                <strong> Made to be squeezed, loved, and cherished</strong> — perfect cuddle companions for all ages.
              </p>
              <a href="#gallery" className="btn btn-primary" style={{ fontFamily: 'Caveat, cursive', fontSize: '24px', color: 'var(--lwl-dark)' }}>
                Find Your Snuggle Buddy
              </a>
            </div>
          </div>
        </div>
      </section>

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
    </>
  );
};

export default Home;