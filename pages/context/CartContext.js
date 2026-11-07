
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const savedCart = localStorage.getItem("cart");

        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }

        setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart, isLoaded]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    // Remove only the selected item
    const removeFromCart = (index) => {
        setCart((prevCart) =>
            prevCart.filter((item, i) => i !== index)
        );
    };

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart }}
        >
            {children}
        </CartContext.Provider>
    );
};
