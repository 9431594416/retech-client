import { Link } from "react-router-dom";

import { useCart } from "../context/CartContext";

function Navbar() {

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

        {/* NAV LINKS */}

        <div className="flex gap-8 text-lg font-semibold text-gray-700 items-center">

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

      </div>

    </nav>
  );
}

export default Navbar;