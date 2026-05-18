import { Link } from "react-router-dom";

function ProductCard(props) {

  const product = props.product || props;

  return (

    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">

      <img
        src={product.image}
        alt={product.title || product.name}
        className="w-full h-64 object-cover"
      />

      <div className="p-5 space-y-4">

        <h2 className="text-2xl font-bold text-gray-800">
          {product.title || product.name}
        </h2>

        <p className="text-gray-600">
          {product.description}
        </p>

        <h3 className="text-3xl font-bold text-emerald-600">
          ₹{product.price}
        </h3>

        <div className="flex gap-3">

          <Link
            to={`/products/${product.id}`}
            className="bg-emerald-600 text-white px-5 py-2 rounded-lg"
          >
            View
          </Link>

          <a
            href={`https://wa.me/918873772587?text=Hi,%20I%20want%20to%20buy%20${product.title || product.name}`}
            target="_blank"
            rel="noreferrer"
            className="bg-green-600 text-white px-5 py-2 rounded-lg"
          >
            WhatsApp
          </a>

        </div>

      </div>

    </div>

  );

}

export default ProductCard;