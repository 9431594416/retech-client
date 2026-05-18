import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center sticky top-0 z-50">

      <div className="flex items-center gap-2">

        <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
          R
        </div>

        <h1 className="text-2xl font-bold text-gray-800">
          ReTech
        </h1>

      </div>

      <div className="flex gap-8 text-gray-700 font-medium">

        <Link
          to="/"
          className="hover:text-emerald-600 transition"
        >
          Home
        </Link>

        <Link
          to="/products"
          className="hover:text-emerald-600 transition"
        >
          Products
        </Link>

        <Link
          to="/about"
          className="hover:text-emerald-600 transition"
        >
          About
        </Link>

        <Link
          to="/contact"
          className="hover:text-emerald-600 transition"
        >
          Contact
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;