
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta
          name="description"
          content="Discover the story behind Steller and our love for fashion."
        />
      </Head>

      <main className="about-page">

        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-content">
            <p className="about-label">THE STORY OF STELLER</p>

            <h1>
              Fashion is an art.
              <br />
              <span>Make it yours.</span>
            </h1>

            <p className="about-hero-description">
              We believe every outfit tells a story.
              Discover timeless styles, beautiful details,
              and fashion that celebrates you.
            </p>

            <a href="/products" className="about-shop-btn">
              EXPLORE COLLECTION <span>→</span>
            </a>
          </div>

          <div className="about-hero-image">
            <img
              src="/images/offer1.jpg"
              alt="Steller fashion collection"
            />

            <div className="about-image-note">
              <span>01 / 03</span>
              <p>STYLE THAT SPEAKS</p>
            </div>
          </div>
        </section>

        {/* Brand Introduction */}
        <section className="about-intro">
          <p className="about-label">WELCOME TO STELLER</p>

          <h2>
            More than fashion.
            <br />
            <span>It's your identity.</span>
          </h2>

          <p className="about-intro-text">
            At Steller, we believe fashion is more than just clothing.
            It is a beautiful way to express your personality,
            confidence, and individuality. We bring together
            contemporary trends and timeless elegance to make
            every style feel special.
          </p>
        </section>

        {/* Brand Story */}
        <section className="about-story">
          <div className="about-story-image">
            <img
              src="/images/offer.jpg"
              alt="Fashion and lifestyle"
            />
          </div>

          <div className="about-story-content">
            <p className="about-label">OUR PHILOSOPHY</p>

            <h2>
              Designed for
              <br />
              <span>your everyday elegance.</span>
            </h2>

            <p>
              From everyday essentials to statement pieces,
              our collections are thoughtfully selected to
              bring style and comfort together.
            </p>

            <p>
              We want every shopping experience to inspire you
              to explore your style, try something new, and
              feel confident in everything you wear.
            </p>

            <div className="about-signature">
              Steller.
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="about-values">
          <div className="about-values-heading">
            <p className="about-label">THE STELLER EXPERIENCE</p>
            <h2>What Makes Us Special?</h2>
            <p>Little details that make your shopping experience better.</p>
          </div>

          <div className="about-values-grid">

            <div className="about-value-card">
              <span className="about-value-number">01</span>
              <div className="about-value-icon">✧</div>
              <h3>Trendy Collections</h3>
              <p>
                Explore stylish collections inspired by
                the latest fashion trends.
              </p>
            </div>

            <div className="about-value-card">
              <span className="about-value-number">02</span>
              <div className="about-value-icon">♡</div>
              <h3>Style & Comfort</h3>
              <p>
                Discover fashion that brings together
                comfort, beauty, and elegance.
              </p>
            </div>

            <div className="about-value-card">
              <span className="about-value-number">03</span>
              <div className="about-value-icon">◇</div>
              <h3>Easy Shopping</h3>
              <p>
                Enjoy a simple and convenient way
                to discover your favourite styles.
              </p>
            </div>

          </div>
        </section>

      </main>
    </>
  );
}
