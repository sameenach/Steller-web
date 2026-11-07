
import { products } from "../Data/products";

// Get all products
export async function getProducts() {
    return products;
}

// Get a single product using its ID
export async function getProductById(id) {
    const product = products.find(
        (product) => product.id === Number(id)
    );

    return product || null;
}
