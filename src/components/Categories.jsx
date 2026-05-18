function Categories() {
  return (
    <section className="px-8 py-12">

      <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Categories
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h4 className="text-xl font-semibold mb-2">
            Student Essentials
          </h4>

          <p className="text-gray-600">
            Laptops, routers, headphones, and study gadgets.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h4 className="text-xl font-semibold mb-2">
            Hotel Electronics
          </h4>

          <p className="text-gray-600">
            TVs, mini-fridges, monitors, and appliances.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h4 className="text-xl font-semibold mb-2">
            Restaurant Equipment
          </h4>

          <p className="text-gray-600">
            Mixers, induction stoves, and kitchen electronics.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h4 className="text-xl font-semibold mb-2">
            Office Setup
          </h4>

          <p className="text-gray-600">
            Printers, monitors, keyboards, and accessories.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Categories;