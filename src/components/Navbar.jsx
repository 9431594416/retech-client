import { useState } from "react";

import {
  Link,
} from "react-router-dom";

import {
  Menu,
  X,
} from "lucide-react";

import {
  useCart,
} from "../context/CartContext";

function Navbar() {

  const [menuOpen, setMenuOpen] =
    useState(false);

  const { cartItems } = useCart();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* LOGO */}

        <Link
          to="/"
          className="text-4xl font-extrabold text-green-600"
        >
          ReTech
        </Link>

        {/* DESKTOP MENU */}

        <div className="hidden md:flex gap-8 text-lg font-semibold text-gray-700 items-center">

          <Link
            to="/"
            className="hover:text-green-600 transition"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="hover:text-green-600 transition"
          >
            Products
          </Link>

          <Link
            to="/about"
            className="hover:text-green-600 transition"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="hover:text-green-600 transition"
          >
            Contact
          </Link>

          {/* CART */}

          <Link
            to="/cart"
            className="relative hover:text-green-600 transition"
          >
            Cart

            {cartItems.length > 0 && (

              <span className="absolute -top-3 -right-5 bg-green-600 text-white text-xs px-2 py-1 rounded-full">

                {cartItems.length}

              </span>

            )}

          </Link>

        </div>

        {/* MOBILE MENU BUTTON */}

        <button
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          className="md:hidden"
        >

          {menuOpen ? (
            <X size={32} />
          ) : (
            <Menu size={32} />
          )}

        </button>

      </div>

      {/* MOBILE MENU */}

      {menuOpen && (

        <div className="md:hidden bg-white border-t px-6 py-6 flex flex-col gap-6 text-xl font-semibold text-gray-700">

          <Link
            to="/"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Home
          </Link>

          <Link
            to="/products"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Products
          </Link>

          <Link
            to="/about"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            About
          </Link>

          <Link
            to="/contact"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Contact
          </Link>

          <Link
            to="/cart"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Cart ({cartItems.length})
          </Link>

        </div>

      )}

    </nav>
  );
}

export default Navbar;