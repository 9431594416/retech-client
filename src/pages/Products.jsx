import { useState } from "react";
import ProductCard from "../components/ProductCard";

const products = [
  {
    id: "1",

    category: "Laptop",

    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",

    name: "Dell Latitude Laptop",

    description:
      "Refurbished business laptop for students and office work.",

    price: "18000",
  },

  {
    id: "2",

    category: "Monitor",

    image:
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8",

    name: "LED Monitor",

    description:
      "Budget-friendly refurbished monitor for work and study.",

    price: "6500",
  },

  {
    id: "3",

    category: "Kitchen",

    image:
      "https://images.unsplash.com/photo-1587831990711-23ca6441447b",

    name: "Induction Stove",

    description:
      "Reliable refurbished induction stove for restaurants and hostels.",

    price: "2800",
  },

  {
    id: "4",

    category: "Accessories",

    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",

    name: "Gaming Keyboard",

    description:
      "Mechanical keyboard for office and gaming setup.",

    price: "2200",
  },

  {
    id: "5",

    category: "Office",

    image:
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed",

    name: "Office Printer",

    description:
      "Refurbished printer for shops and office work.",

    price: "4500",
  },

  {
    id: "6",

    category: "Phone",

    image:
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef",

    name: "Smartphone",

    description:
      "Budget refurbished smartphone for students.",

    price: "9000",
  },
];

function Products() {

  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const filteredProducts = products.filter((product) => {

    const matchesSearch =
      product.name.toLowerCase().includes(
        search.toLowerCase()
      );

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-100 px-8 py-16">

      <h1 className="text-5xl font-bold text-center text-gray-800 mb-14">
        All Products
      </h1>

      <div className="flex justify-center mb-10">

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-xl px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />

      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">

        {[
          "All",
          "Laptop",
          "Monitor",
          "Kitchen",
          "Accessories",
          "Office",
          "Phone",
        ].map((category) => (

          <button
            key={category}
            onClick={() =>
              setSelectedCategory(category)
            }
            className={`px-5 py-3 rounded-xl font-semibold transition ${
              selectedCategory === category
                ? "bg-emerald-600 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            {category}
          </button>

        ))}

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        ))}

      </div>

    </div>
  );
}

export default Products;