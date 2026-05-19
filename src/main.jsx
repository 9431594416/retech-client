import { useCart } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import {
  CartProvider,
} from "./context/CartContext";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import {
  collection,
  getDocs,
} from "firebase/firestore";

import { db } from "./firebase/firebase";

import AdminUpload from "./pages/AdminUpload";

import "./index.css";



function Hero() {
  return (
    <section className="relative bg-black text-white overflow-hidden">

      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
          alt="electronics"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-36 text-center">

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Premium Refurbished
          <br />
          Electronics
        </h1>

        <p className="mt-8 text-xl text-gray-200 max-w-3xl mx-auto">
          Affordable laptops, smartphones and electronics
          for students and businesses.
        </p>

        <div className="mt-10 flex justify-center gap-6">

          <Link
            to="/products"
            className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-2xl text-lg font-bold transition"
          >
            Shop Now
          </Link>

          <Link
            to="/contact"
            className="border border-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-white hover:text-black transition"
          >
            Contact Us
          </Link>

        </div>
      </div>
    </section>
  );
}

function ProductCard({
  id,
  image,
  title,
  price,
  description,
}) {

  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300">

      {/* IMAGE */}

      <div className="overflow-hidden">

        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover hover:scale-110 transition duration-500"
        />

      </div>

      {/* CONTENT */}

      <div className="p-6">

        <h3 className="text-2xl font-bold text-gray-800">
          {title}
        </h3>

        {/* DESCRIPTION */}

        <p className="mt-4 text-gray-600 leading-relaxed">
          {description}
        </p>

        {/* PRICE */}

        <p className="text-4xl font-extrabold text-green-600 mt-6">
          ₹{price}
        </p>

        {/* ADD TO CART */}

        <button
          onClick={() =>
            addToCart({
              id,
              image,
              name: title,
              price,
            })
          }
          className="w-full mt-8 bg-black hover:bg-gray-800 text-white py-4 rounded-2xl text-lg font-bold transition"
        >
          Add To Cart
        </button>

        {/* WHATSAPP */}

        <a
          href={`https://wa.me/918873772587?text=Hi,%20I%20want%20to%20buy%20${title}`}
          target="_blank"
          className="block text-center w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl text-lg font-bold transition"
        >
          Buy on WhatsApp
        </a>

        {/* OFFLINE */}

 <a
  href="https://maps.app.goo.gl/yMTGQpd2hRsTfoAC6"
  target="_blank"
  className="block text-center w-full mt-4 border-2 border-black hover:bg-black hover:text-white text-black py-4 rounded-2xl text-lg font-bold transition"
>
  Buy Offline
</a>

      </div>

    </div>
  );
}

function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const fetchProducts = async () => {

      const querySnapshot = await getDocs(
        collection(db, "products")
      );

      const productsArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProducts(productsArray);
    };

    fetchProducts();

  }, []);

  return (
    <div>
      <Navbar />
      <Hero />

      <section className="py-24 px-6 md:px-16 bg-gray-100">

        <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-20 text-gray-800">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {products.map((product) => (

            <ProductCard
  key={product.id}
  id={product.id}
  image={product.image}
  title={product.name}
  price={product.price}
  description={product.description}
/>

          ))}

        </div>
      </section>

      <footer className="bg-black text-white py-10 text-center">
        <h2 className="text-3xl font-bold text-green-500">
          ReTech
        </h2>

        <p className="mt-4 text-gray-400">
          Affordable electronics for students & businesses
        </p>
      </footer>
    </div>
  );
}

function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const fetchProducts = async () => {

      const querySnapshot = await getDocs(
        collection(db, "products")
      );

      const productsArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProducts(productsArray);
    };

    fetchProducts();

  }, []);

  return (
    <div>
      <Navbar />

      <section className="py-24 px-6 md:px-16 bg-gray-100 min-h-screen">

        <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-20 text-gray-800">
          Products
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {products.map((product) => (

            <ProductCard
  key={product.id}
  id={product.id}
  image={product.image}
  title={product.name}
  price={product.price}
  description={product.description}
/>

          ))}

        </div>

      </section>
    </div>
  );
}

function About() {
  return (
    <div>
      <Navbar />

      <section className="py-24 px-10 text-center min-h-screen bg-gray-100">

        <h1 className="text-5xl md:text-6xl font-extrabold mb-10">
          About Us
        </h1>

        <p className="max-w-4xl mx-auto text-xl md:text-2xl text-gray-700 leading-relaxed">
          ReTech provides premium refurbished electronics
          for students, startups, businesses and homes at
          affordable prices with quality assurance.
        </p>
      </section>
    </div>
  );
}

function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen">

      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

          {/* LEFT SIDE */}

          <div className="bg-green-600 text-white p-12 flex flex-col justify-center">

            <h1 className="text-5xl font-extrabold leading-tight">
              Contact
              <br />
              ReTech
            </h1>

            <p className="mt-8 text-xl text-green-100 leading-relaxed">
              For product enquiries, refurbished electronics,
              business deals and support, contact us directly.
            </p>

            <div className="mt-12 space-y-8">

              <div>

                <h2 className="text-2xl font-bold">
                  Phone
                </h2>

                <a
                  href="tel:+918873772587"
                  className="text-xl text-white hover:underline"
                >
                  +91 8873772587
                </a>

              </div>

              <div>

                <h2 className="text-2xl font-bold">
                  Email
                </h2>

                <a
                  href="mailto:harshkumartiwary12@gmail.com"
                  className="text-xl text-white hover:underline break-all"
                >
                  harshkumartiwary12@gmail.com
                </a>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="p-12 flex flex-col justify-center">

            <h2 className="text-4xl font-extrabold text-gray-800">
              Let’s Connect
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Click below to directly chat on WhatsApp for
              product availability, pricing and support.
            </p>

            <a
              href="https://wa.me/918873772587"
              target="_blank"
              className="mt-10 inline-block bg-black hover:bg-gray-800 text-white text-center py-4 rounded-2xl text-xl font-bold transition"
            >
              Chat on WhatsApp
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

  <CartProvider>

    <BrowserRouter>
      <Routes>
        <Route
  path="/cart"
  element={<Cart />}
/>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/admin"
          element={<AdminUpload />}
        />

      </Routes>

    </BrowserRouter>

  </CartProvider>

</React.StrictMode>
);