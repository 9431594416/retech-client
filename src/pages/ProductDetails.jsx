import {
  doc,
  getDoc,
} from "firebase/firestore";

import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
} from "react-router-dom";

import Navbar from "../components/Navbar";

import { db } from "../firebase/firebase";

import { useCart } from "../context/CartContext";

function ProductDetails() {

  const { id } = useParams();

  const { addToCart } = useCart();

  const [product, setProduct] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const fetchProduct =
      async () => {

        try {

          const docRef = doc(
            db,
            "products",
            id
          );

          const docSnap =
            await getDoc(docRef);

          if (docSnap.exists()) {

            setProduct({
              id: docSnap.id,
              ...docSnap.data(),
            });

          }

        } catch (error) {

          console.log(error);

        } finally {

          setLoading(false);

        }

      };

    fetchProduct();

  }, [id]);

  if (loading) {

    return (
      <div className="text-center text-4xl font-bold mt-40">
        Loading...
      </div>
    );

  }

  if (!product) {

    return (
      <div className="text-center text-4xl font-bold mt-40">
        Product Not Found
      </div>
    );

  }

  return (
    <div className="bg-gray-100 min-h-screen">

      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2 gap-12">

          {/* IMAGE */}

          <div>

            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />

          </div>

          {/* CONTENT */}

          <div className="p-10">

            <h1 className="text-5xl font-extrabold text-gray-800">
              {product.name}
            </h1>

            <p className="mt-8 text-xl text-gray-600 leading-relaxed">
              {product.description}
            </p>

            <div className="mt-10 space-y-4">

              <p className="text-xl">
                <span className="font-bold">
                  Condition:
                </span>

                {" "} Refurbished
              </p>

              <p className="text-xl">
                <span className="font-bold">
                  Quality Checked:
                </span>

                {" "} Yes
              </p>

              <p className="text-xl">
                <span className="font-bold">
                  Support:
                </span>

                {" "} Available
              </p>

            </div>

            <div className="mt-12 text-6xl font-extrabold text-green-600">
              ₹{product.price}
            </div>

            {/* BUTTONS */}

            <div className="mt-12 space-y-4">

              <button
                onClick={() =>
                  addToCart({
                    id: product.id,
                    image:
                      product.image,
                    name:
                      product.name,
                    price:
                      product.price,
                  })
                }
                className="w-full bg-black hover:bg-gray-800 text-white py-5 rounded-2xl text-xl font-bold transition"
              >
                Add To Cart
              </button>

              <a
                href={`https://wa.me/918873772587?text=Hi,%20I%20want%20to%20buy%20${product.name}`}
                target="_blank"
                className="block text-center w-full bg-green-600 hover:bg-green-700 text-white py-5 rounded-2xl text-xl font-bold transition"
              >
                Buy on WhatsApp
              </a>

              <a
                href="https://maps.app.goo.gl/yMTGQpd2hRsTfoAC6"
                target="_blank"
                className="block text-center w-full border-2 border-black hover:bg-black hover:text-white text-black py-5 rounded-2xl text-xl font-bold transition"
              >
                Buy Offline
              </a>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default ProductDetails;