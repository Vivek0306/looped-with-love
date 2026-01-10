const About = () => {
    return (
        <section className="py-5" style={{ backgroundColor: 'var(--lwl-white)' }}>
        <div className="container text-center">
          <h1 className="fw-bold mb-3 hero-title" >
            About
          </h1>
          <h1 className="fw-bold mb-3 hero-title" >
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

            <div className="py-3">
                <div className="section-title text-start mb-4 fw-bold" style={{ fontFamily: 'Caveat, cursive', fontSize: '36px', color: 'var(--lwl-dark)' }}>
                    Where Every Stitch Tells a Story
                </div>
                <div className="text-muted mb-4 text-start">
                    <p>Looped With Love began on April 9, 2025, with a simple dream: to bring handmade warmth into everyday life. What started as a passion for crochet has blossomed into a collection of unique, lovingly crafted pieces that add charm and comfort to your world.</p>
                    <p>Every item you see here is handmade with patience, care, and attention to detail. From everlasting flower bouquets to snuggly teddy bears, from tiny baby booties to decorative plant pots — <strong>each creation is looped with love, one stitch at a time.</strong></p>
                </div>
            </div>
                        <div className="py-2">
                <div className="section-title text-start mb-4 fw-bold" style={{ fontFamily: 'Caveat, cursive', fontSize: '36px', color: 'var(--lwl-dark)' }}>
                    Why Handmade?
                </div>
                <div className="text-muted mb-4 text-start">
                    <p>In a world of mass production, handmade pieces offer something truly special. <strong>Each item is unique, crafted with care and intention.</strong> When you choose handmade, you're choosing quality, creativity, and a personal touch that simply can't be replicated.</p>
                </div>
            </div>
            <div className="py-2">
                <div className="section-title text-start mb-4 fw-bold" style={{ fontFamily: 'Caveat, cursive', fontSize: '36px', color: 'var(--lwl-dark)' }}>
                    Custom Creations Welcome
                </div>
                <div className="text-muted mb-4 text-start">
                    <p>Have something special in mind? Custom colours, sizes, and designs are always available. Reach out via Instagram <strong><a href="https://www.instagram.com/_looped_with_love_">@_looped_with_love_</a></strong> to bring your vision to life.</p>
                    <p>Thank you for supporting handmade. Every purchase helps keep this craft alive and thriving! 🧶💕</p>
                </div>
            </div>
        </div>
      </section>
    );    
}

export default About;  