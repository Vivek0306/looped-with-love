import GalleryCard from "../components/GalleryCard";
import { BouqetItems, BookmarksItems, PotItems, BabyItems, PlushiesItems, OtherItems } from "../data/galleryItems";

const Gallery = () => {
  return (
    <>
      {/* Page Title */}
      <section className="py-5" style={{ backgroundColor: 'var(--lwl-white)' }}>
        <div className="container text-center">
          <h1 className="fw-bold mb-3" style={{ fontFamily: 'Pacifico, cursive', fontSize: '64px', color: 'var(--lwl-rose)' }}>
            Gallery
          </h1>
          <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
            Browse our collection of handcrafted crochet creations
          </p>
        </div>
      </section>

      {/* Bouquet Section */}
      <section className="py-5" style={{ backgroundColor: 'var(--lwl-peach)' }}>
        <div className="container">
          <div className="row">            
            <div className="col-12 col-lg-3 mb-4 mb-lg-0">
              <div className="sticky-top" style={{ top: '100px' }}>
                <h2 className="fw-bold" style={{ fontFamily: 'Caveat, cursive', fontSize: '48px', color: 'var(--lwl-dark)' }}>
                  Flower<br className="d-none d-md-block"/> Bouquets
                </h2>
                <p className="text-muted" style={{ fontSize: '14px' }}>
                  Blooms that last forever
                </p>
              </div>
            </div>

            <div className="col-12 col-lg-9">
              <div className="row g-3 g-md-4">
                {BouqetItems.map((item) => (
                  <GalleryCard key={item.id} item={item} isSide={true} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Bookmarks Section */}
      <section className="py-5" >
        <div className="container">
          <div className="row">            
            <div className="col-12 col-lg-3 mb-4 mb-lg-0">
              <div className="sticky-top" style={{ top: '100px' }}>
                <h2 className="fw-bold" style={{ fontFamily: 'Caveat, cursive', fontSize: '48px', color: 'var(--lwl-dark)' }}>
                  Bookmarks
                </h2>
                <p className="text-muted" style={{ fontSize: '14px' }}>
                  Never Lose Your Page Again
                </p>
              </div>
            </div>

            <div className="col-12 col-lg-9">
              <div className="row g-3 g-md-4">
                {BookmarksItems.map((item) => (
                  <GalleryCard key={item.id} item={item} isSide={true} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pots Section */}
      <section className="py-5" style={{ backgroundColor: 'var(--lwl-peach)' }}>
        <div className="container">
          <div className="row">            
            <div className="col-12 col-lg-3 mb-4 mb-lg-0">
              <div className="sticky-top" style={{ top: '100px' }}>
                <h2 className="fw-bold" style={{ fontFamily: 'Caveat, cursive', fontSize: '48px', color: 'var(--lwl-dark)' }}>
                  Tabletop<br className="d-none d-md-block"/> Gardens
                </h2>
                <p className="text-muted" style={{ fontSize: '14px' }}>
                  Your Forever Garden Starts Here
                </p>
              </div>
            </div>

            <div className="col-12 col-lg-9">
              <div className="row g-3 g-md-4">
                {PotItems.map((item) => (
                  <GalleryCard key={item.id} item={item} isSide={true} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Baby Section */}
      <section className="py-5" >
        <div className="container">
          <div className="row">            
            <div className="col-12 col-lg-3 mb-4 mb-lg-0">
              <div className="sticky-top" style={{ top: '100px' }}>
                <h2 className="fw-bold" style={{ fontFamily: 'Caveat, cursive', fontSize: '48px', color: 'var(--lwl-dark)' }}>
                  Baby<br className="d-none d-md-block"/>  Bliss
                </h2>
                <p className="text-muted" style={{ fontSize: '14px' }}>
                  Little Treasures for Tiny Humans
                </p>
              </div>
            </div>

            <div className="col-12 col-lg-9">
              <div className="row g-3 g-md-4">
                {BabyItems.map((item) => (
                  <GalleryCard key={item.id} item={item} isSide={true} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Plushie Section */}
      <section className="py-5" style={{ backgroundColor: 'var(--lwl-peach)' }}>
        <div className="container">
          <div className="row">            
            <div className="col-12 col-lg-3 mb-4 mb-lg-0">
              <div className="sticky-top" style={{ top: '100px' }}>
                <h2 className="fw-bold" style={{ fontFamily: 'Caveat, cursive', fontSize: '48px', color: 'var(--lwl-dark)' }}>
                  Snuggle<br className="d-none d-md-block"/> Buddies
                </h2>
                <p className="text-muted" style={{ fontSize: '14px' }}>
                  Hug-ready and heart-warming
                </p>
              </div>
            </div>

            <div className="col-12 col-lg-9">
              <div className="row g-3 g-md-4">
                {PlushiesItems.map((item) => (
                  <GalleryCard key={item.id} item={item} isSide={true} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessories Section */}
      <section className="py-5" >
        <div className="container">
          <div className="row">            
            <div className="col-12 col-lg-3 mb-4 mb-lg-0">
              <div className="sticky-top" style={{ top: '100px' }}>
                <h2 className="fw-bold" style={{ fontFamily: 'Caveat, cursive', fontSize: '48px', color: 'var(--lwl-dark)' }}>
                  Looped<br className="d-none d-md-block"/>  Accessories
                </h2>
                <p className="text-muted" style={{ fontSize: '14px' }}>
                  Handcrafted touches for everyday life
                </p>
              </div>
            </div>

            <div className="col-12 col-lg-9">
              <div className="row g-3 g-md-4">
                {OtherItems.map((item) => (
                  <GalleryCard key={item.id} item={item} isSide={true} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;