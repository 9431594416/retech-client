function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-8">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-3xl font-bold text-emerald-500 mb-4">
            ReTech
          </h2>

          <p className="text-gray-400">
            Affordable refurbished electronics for students and businesses.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact
          </h3>

          <p className="text-gray-400">
            support@retech.com
          </p>

          <p className="text-gray-400 mt-2">
            +91 9876543210
          </p>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500">
        © 2026 ReTech. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;