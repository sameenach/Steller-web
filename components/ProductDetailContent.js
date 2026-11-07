
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CartContext } from "../context/CartContext";
import { getProductById } from "../services/ProductService";

export default function ProductDetailContent() {
    const router = useRouter();
    const { id } = router.query;

    const { addToCart } = useContext(CartContext);

    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (!router.isReady) return;

        async function fetchProduct() {
            const data = await getProductById(id);
            setProduct(data);
        }

        fetchProduct();
    }, [id, router.isReady]);

    if (!router.isReady || !product) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="detail-container">
            <div className="detail-image">
                <img src={product.image} alt={product.title} />
            </div>

            <div className="detail-info">
                <p className="detail-category">
                    {product.category}
                </p>

                <h1>{product.title}</h1>

                <h2>₹{product.price}</h2>

                <p className="detail-description">
                    {product.description}
                </p>

                <button
                    className="cart-button"
                    onClick={() => addToCart(product)}
                >
                    ADD TO CART
                </button>
            </div>
        </div>
    );
}
