import { useParams } from "react-router-dom";

const products = [
  {
    id: "1",

    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",

    name: "Dell Latitude Laptop",

    description:
      "Refurbished business laptop for students and office work.",

    price: "18000",

    condition: "Grade A",

    warranty: "3 Months",
  },

  {
    id: "2",

    image:
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8",

    name: "LED Monitor",

    description:
      "Budget-friendly refurbished monitor for work and study.",

    price: "6500",

    condition: "Grade A",

    warranty: "2 Months",
  },

  {
    id: "3",

    image:
      "https://images.unsplash.com/photo-1587831990711-23ca6441447b",

    name: "Induction Stove",

    description:
      "Reliable refurbished induction stove for restaurants and hostels.",

    price: "2800",

    condition: "Grade A",

    warranty: "1 Month",
  },
];

function ProductDetails() {

  const { id } = useParams();

  const product = products.find(
    (item) => item.id === id
  );

  if (!product) {
    return (
      <div className="p-10 text-5xl font-bold">
        Product Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />

        <div className="p-8">

          <h1 className="text-5xl font-bold text-gray-800">
            {product.name}
          </h1>

          <p className="text-gray-600 mt-6 text-lg">
            {product.description}
          </p>

          <div className="mt-8 space-y-4">

            <p className="text-xl">
              <span className="font-bold">
                Condition:
              </span>

              {" "} {product.condition}
            </p>

            <p className="text-xl">
              <span className="font-bold">
                Warranty:
              </span>

              {" "} {product.warranty}
            </p>

            <p className="text-xl">
              <span className="font-bold">
                Tested:
              </span>

              {" "} Yes
            </p>

          </div>

          <div className="text-5xl font-bold text-emerald-600 mt-10">
            ₹{product.price}
          </div>

          <button className="mt-8 bg-emerald-600 text-white px-8 py-4 rounded-xl text-xl hover:bg-emerald-700 transition">
            Contact Seller
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;