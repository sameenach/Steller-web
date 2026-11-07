
export default function Home() {
  const products = [
    { id: 1, image: "/images/offer2.jpg", title: "Women's Fashion" },
    { id: 2, image: "/images/offer4.jpg", title: "Men's Fashion" },
    { id: 3, image: "/images/offer.jpg", title: "Casual Wear" },
    { id: 4, image: "/images/offer5.jpg", title: "Elegant Styles" },
    { id: 5, image: "/images/offer8.jpg", title: "Summer Collection" },
    { id: 6, image: "/images/offer7.jpg", title: "Trendy Outfits" },
  ];

  return (
    <>
      <div className="banner">
        <img src="/images/banner2.jpg" alt="Fashion Banner" className="banner-image" />
      </div>

      <section className="offer-section">
        <div className="offer-heading">
          <p className="offer-subtitle">YOUR STYLE, YOUR STORY</p>
          <h2>Fashion Finds You’ll Love</h2>
          <p className="offer-description">
            Refresh your wardrobe with timeless styles, elegant accessories,
            and everyday essentials made for you.
          </p>
        </div>

        <div className="offer-products">
          {products.map((p) => (
            <div key={p.id} className="offer-card">
              <div className="offer-image">
                <img src={p.image} alt={p.title} />
                <span className="offer-badge">SPECIAL OFFER</span>
              </div>

              <div className="offer-info">
                <h3>{p.title}</h3>
                <p>Discover your signature style</p>
                <button className="offer-shop-button">
                  Explore Now →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
