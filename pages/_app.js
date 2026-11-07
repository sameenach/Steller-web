import Head from "next/head";
import "../styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartProvider } from "../context/CartContext";

export default function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Head>
        <title>Steller </title>
        <meta
          name="description"
          content="Discover your style with Steller."
        />
      </Head>

      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </CartProvider>
  );
}