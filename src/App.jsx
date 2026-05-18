import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold text-green-600">
          ReTech
        </div>

        <div className="flex gap-8 text-lg font-medium">
          <a href="/" className="hover:text-green-600">
            Home
          </a>

          <a href="/products" className="hover:text-green-600">
            Products
          </a>

          <a href="/about" className="hover:text-green-600">
            About
          </a>

          <a href="/contact" className="hover:text-green-600">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
          Affordable Refurbished <br />
          Electronics For Students & Businesses
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          Quality-tested laptops, phones, kitchen appliances,
          and electronics at budget-friendly prices.
        </p>

        <button className="mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl text-lg font-semibold">
          Shop Now
        </button>
      </section>

      {/* Categories */}
      <section className="px-8 py-10">
        <h2 className="text-4xl font-bold text-center mb-10">
          Categories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-bold mb-3">
              Student Essentials
            </h3>

            <p className="text-gray-600">
              Laptops, routers, headphones and study gadgets.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-bold mb-3">
              Hotel Electronics
            </h3>

            <p className="text-gray-600">
              TVs, mini-fridges, monitors and appliances.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-bold mb-3">
              Restaurant Equipment
            </h3>

            <p className="text-gray-600">
              Mixers, induction stoves and kitchen electronics.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-bold mb-3">
              Office Setup
            </h3>

            <p className="text-gray-600">
              Printers, monitors, keyboards and accessories.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Product 1 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
              alt="Laptop"
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold">
                Refurbished Laptop
              </h3>

              <p className="text-gray-600 mt-2">
                Perfect for students and office work.
              </p>

              <div className="text-4xl font-bold text-green-600 mt-4">
                ₹18,000
              </div>

              <button className="mt-5 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl">
                View Product
              </button>
            </div>
          </div>

          {/* Product 2 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
              alt="Phone"
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold">
                Refurbished Smartphone
              </h3>

              <p className="text-gray-600 mt-2">
                High quality phones at low prices.
              </p>

              <div className="text-4xl font-bold text-green-600 mt-4">
                ₹9,999
              </div>

              <button className="mt-5 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl">
                View Product
              </button>
            </div>
          </div>

          {/* Product 3 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a"
              alt="Monitor"
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold">
                Office Monitor
              </h3>

              <p className="text-gray-600 mt-2">
                Full HD display for productivity.
              </p>

              <div className="text-4xl font-bold text-green-600 mt-4">
                ₹7,500
              </div>

              <button className="mt-5 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl">
                View Product
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 mt-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-green-500">
            ReTech
          </h2>

          <p className="mt-4 text-gray-400">
            Affordable refurbished electronics for students,
            businesses and homes.
          </p>

          <div className="flex justify-center gap-6 mt-6 text-gray-300">
            <a href="/">Home</a>
            <a href="/products">Products</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;