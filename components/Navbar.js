
import Link from "next/link";
import { useState, useContext } from "react";
import { useRouter } from "next/router";
 import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const { cart } = useContext(CartContext);

  return (
    <nav className="my-navbar">

      {/* Logo */}
      <Link className="my-brand" href="/">
        Steller<span>.</span>
      </Link>

      {/* Search */}
      {router.pathname === "/products" && (
        <form
          action="/products"
          method="GET"
          className="nav-search-form"
        >
          <input
            type="text"
            name="search"
            placeholder="Search your style..."
          />
          <button type="submit">⌕</button>
        </form>
      )}

      {/* Mobile Toggle */}
      <button
        className="my-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>

      {/* Navigation Links */}
      <div className={`my-menu ${open ? "my-menu-open" : ""}`}>
        <Link href="/" onClick={() => setOpen(false)}>
          Home
        </Link>

        <Link href="/products" onClick={() => setOpen(false)}>
          Shop
        </Link>

        <Link href="/about" onClick={() => setOpen(false)}>
          About
        </Link>

        <Link href="/contact" onClick={() => setOpen(false)}>
          Contact
        </Link>

        {/* Cart Icon */}
        <Link
          href="/cart"
          className="cart-icon-link"
          onClick={() => setOpen(false)}
        >
          <span className="wishlist-symbol">♡</span>
          <span className="cart-count">{cart.length}</span>
        </Link>
      </div>

    </nav>
  );
}
