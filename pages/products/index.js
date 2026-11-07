
import { useRouter } from "next/router";
import { getProducts } from "../../services/ProductService";
import Link from "next/link";
import Head from "next/head";


export default function ProductList({ products }) {
  const router = useRouter();

  // Get search parameters from the URL
  const {
    search = "",
    category = "",
    limit = "",
  } = router.query;

  // Filter products based on title and category
  let filteredProducts = products.filter((prod) =>
    prod.title.toLowerCase().includes(
      String(search).toLowerCase()
    ) &&
    prod.category.toLowerCase().includes(
      String(category).toLowerCase()
    )
  );

  // Apply product limit
  if (limit) {
    filteredProducts = filteredProducts.slice(
      0,
      Number(limit)
    );
  }

  return (
  <>
    <Head>
      <title>Our Products </title>
      <meta
        name="description"
        content="Explore the latest fashion collection at Steller."
      />
    </Head>

    <div className="product-page">
      <section className="product-banner">
        <p className="banner-tag">THE NEW COLLECTION</p>
        <h1>Discover Your Style</h1>
        <p>
          Explore our collection of trendy products
          picked just for you.
        </p>
      </section>

      <section className="products-section">
        <div className="section-heading">
          <div>
            <p className="section-subtitle">MADE FOR YOU</p>
            <h2>Our Products</h2>
          </div>

          <span className="product-count">
            {filteredProducts.length} Products
          </span>
        </div>

        <div className="products-container">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((prod) => (
              <div className="product-card" key={prod.id}>
                <div className="product-image-container">
                  <span className="product-badge">NEW ARRIVAL</span>
                  <img
                    src={prod.image}
                    alt={prod.title}
                    className="product-image"
                  />
                </div>

                <div className="product-info">
                  <p className="product-category">{prod.category}</p>
                  <h3 className="product-title">{prod.title}</h3>
                  <p className="product-price">
                    ₹{Number(prod.price).toFixed(2)}
                  </p>

                  <Link
                    href={`/products/${prod.id}`}
                    className="view-button"
                  >
                    View More <span>→</span>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <h2>No products found!</h2>
          )}
        </div>
      </section>
    </div>
  </>
);
}

// Get products before rendering the page
export async function getStaticProps() {
  const products = await getProducts();

  return {
    props: {
      products,
    },
  };
}
