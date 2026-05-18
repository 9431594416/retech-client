import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import "./index.css";

function Navbar() {
  return (
    <nav className="bg-white shadow-md px-10 py-5 flex justify-between items-center sticky top-0 z-50">
      <Link
        to="/"
        className="text-4xl font-extrabold text-green-600"
      >
        ReTech
      </Link>

      <div className="flex gap-10 text-lg font-semibold text-gray-700">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-28 px-8 text-center">

      <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
        Affordable Refurbished
        <br />
        Electronics
      </h1>

      <p className="mt-8 text-xl text-gray-200 max-w-3xl mx-auto">
        Premium refurbished laptops, smartphones and office
        electronics at unbeatable prices.
      </p>

      <Link
        to="/products"
        className="inline-block mt-10 bg-green-500 hover:bg-green-600 transition px-10 py-4 rounded-2xl text-xl font-bold"
      >
        Shop Now
      </Link>
    </section>
  );
}

function ProductCard({ image, title, price }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition duration-300">

      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover"
      />

      <div className="p-6">
        <h3 className="text-3xl font-bold text-gray-800">
          {title}
        </h3>

        <p className="mt-3 text-4xl font-extrabold text-green-600">
          {price}
        </p>

        <a
          href="https://wa.me/918873772587"
          target="_blank"
          className="inline-block mt-6 bg-green-600 text-white px-6 py-3 rounded-xl font-bold"
        >
          Buy on WhatsApp
        </a>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />

      <section className="py-20 px-10 bg-gray-100">

        <h2 className="text-5xl font-extrabold text-center mb-16">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <ProductCard
            image="https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
            title="Laptop"
            price="₹18,000"
          />

          <ProductCard
            image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
            title="Smartphone"
            price="₹9,999"
          />

          <ProductCard
            image="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf"
            title="Monitor"
            price="₹7,500"
          />

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
  return (
    <div>
      <Navbar />

      <section className="py-20 px-10 bg-gray-100 min-h-screen">

        <h1 className="text-6xl font-extrabold text-center mb-16">
          Products
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <ProductCard
            image="https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
            title="Laptop"
            price="₹18,000"
          />

          <ProductCard
            image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
            title="Smartphone"
            price="₹9,999"
          />

          <ProductCard
            image="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf"
            title="Monitor"
            price="₹7,500"
          />

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

        <h1 className="text-6xl font-extrabold mb-10">
          About Us
        </h1>

        <p className="max-w-4xl mx-auto text-2xl text-gray-700 leading-relaxed">
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
    <div>
      <Navbar />

      <section className="py-24 px-10 text-center min-h-screen bg-gray-100">

        <h1 className="text-6xl font-extrabold mb-10">
          Contact Us
        </h1>

        <p className="text-2xl text-gray-700">
          WhatsApp: 8873772587
        </p>

        <a
          href="https://wa.me/918873772587"
          target="_blank"
          className="inline-block mt-8 bg-green-600 text-white px-8 py-4 rounded-2xl text-xl font-bold"
        >
          Chat on WhatsApp
        </a>
      </section>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);