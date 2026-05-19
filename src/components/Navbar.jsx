import { Link } from "react-router-dom";

function Navbar() {
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

        <div className="flex gap-8 text-lg font-semibold text-gray-700">

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

        </div>

      </div>

    </nav>
  );
}

export default Navbar;