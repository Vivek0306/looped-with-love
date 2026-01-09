import GalleryCard from "../components/GalleryCard";
import { BouqetItems } from "../data/galleryItems";

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
            
            {/* LEFT: Section Title - Sticky */}
            <div className="col-12 col-lg-3 mb-4 mb-lg-0">
              <div className="sticky-top" style={{ top: '100px' }}>
                <h2 className="fw-bold" style={{ fontFamily: 'Caveat, cursive', fontSize: '48px', color: 'var(--lwl-dark)' }}>
                  Flower<br />Bouquets
                </h2>
                <p className="text-muted" style={{ fontSize: '14px' }}>
                  Blooms that last forever
                </p>
              </div>
            </div>

            {/* RIGHT: Image Grid */}
            <div className="col-12 col-lg-9">
              <div className="row g-3 g-md-4">
                {BouqetItems.map((item) => (
                  <GalleryCard key={item.id} item={item} />
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