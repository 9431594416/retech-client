import Navbar from "../components/Navbar";

import {
  useCart,
} from "../context/CartContext";

function Cart() {

  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  } = useCart();

  return (
    <div className="bg-gray-100 min-h-screen">

      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h1 className="text-5xl font-extrabold mb-16">
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (

          <div className="bg-white p-16 rounded-3xl shadow-xl text-center">

            <h2 className="text-3xl font-bold text-gray-700">
              Your cart is empty
            </h2>

          </div>

        ) : (

          <div className="grid gap-10">

            {cartItems.map((item) => (

              <div
                key={item.id}
                className="bg-white rounded-3xl shadow-xl p-6 flex flex-col md:flex-row gap-8 items-center"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-64 h-64 object-cover rounded-2xl"
                />

                <div className="flex-1">

                  <h2 className="text-3xl font-bold">
                    {item.name}
                  </h2>

                  <p className="text-4xl font-extrabold text-green-600 mt-4">
                    ₹{item.price}
                  </p>

                  <div className="flex items-center gap-4 mt-8">

                    <button
                      onClick={() =>
                        decreaseQuantity(
                          item.id
                        )
                      }
                      className="bg-black text-white px-4 py-2 rounded-xl"
                    >
                      -
                    </button>

                    <span className="text-2xl font-bold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(
                          item.id
                        )
                      }
                      className="bg-black text-white px-4 py-2 rounded-xl"
                    >
                      +
                    </button>

                  </div>

                  <button
                    onClick={() =>
                      removeFromCart(
                        item.id
                      )
                    }
                    className="mt-8 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-bold"
                  >
                    Remove Product
                  </button>

                </div>

              </div>

            ))}

            {/* TOTAL */}

            <div className="bg-white p-10 rounded-3xl shadow-xl">

              <h2 className="text-4xl font-extrabold">
                Total: ₹{totalPrice}
              </h2>

              <a
                href={`https://wa.me/918873772587?text=Hi,%20I%20want%20to%20order%20products%20worth%20₹${totalPrice}`}
                target="_blank"
                className="inline-block mt-8 bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-2xl text-xl font-bold"
              >
                Checkout on WhatsApp
              </a>

            </div>

          </div>

        )}

      </section>

    </div>
  );
}

export default Cart;