import { useEffect, useState } from "react";

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

function AdminUpload() {
  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const [editingId, setEditingId] = useState(null);

  const productsCollection = collection(db, "products");

  // FETCH PRODUCTS
  const fetchProducts = async () => {
    const data = await getDocs(productsCollection);

    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    setProducts(filteredData);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // ADD PRODUCT
  const addProduct = async (e) => {
    e.preventDefault();

    if (!name || !price || !image) {
      alert("Fill all fields");
      return;
    }

    await addDoc(productsCollection, {
      name,
      price,
      image,
    });

    setName("");
    setPrice("");
    setImage("");

    fetchProducts();

    alert("Product Added");
  };

  // DELETE PRODUCT
  const deleteProduct = async (id) => {
    await deleteDoc(doc(db, "products", id));

    fetchProducts();

    alert("Product Deleted");
  };

  // EDIT PRODUCT
  const editProduct = (product) => {
    setEditingId(product.id);

    setName(product.name);
    setPrice(product.price);
    setImage(product.image);
  };

  // UPDATE PRODUCT
  const updateProduct = async (e) => {
    e.preventDefault();

    const productDoc = doc(db, "products", editingId);

    await updateDoc(productDoc, {
      name,
      price,
      image,
    });

    setEditingId(null);

    setName("");
    setPrice("");
    setImage("");

    fetchProducts();

    alert("Product Updated");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-5xl font-extrabold text-center mb-10 text-green-600">
        Admin Dashboard
      </h1>

      {/* FORM */}

      <form
        onSubmit={editingId ? updateProduct : addProduct}
        className="bg-white p-8 rounded-3xl shadow-xl max-w-2xl mx-auto"
      >

        <h2 className="text-3xl font-bold mb-8 text-gray-800">

          {editingId ? "Edit Product" : "Add Product"}

        </h2>

        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-4 rounded-xl mb-5"
        />

        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border p-4 rounded-xl mb-5"
        />

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full border p-4 rounded-xl mb-5"
        />

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl text-xl font-bold transition"
        >
          {editingId ? "Update Product" : "Upload Product"}
        </button>

      </form>

      {/* PRODUCTS */}

      <div className="mt-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          Uploaded Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {products.map((product) => (

            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden shadow-xl"
            >

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold text-gray-800">
                  {product.name}
                </h3>

                <p className="text-3xl font-extrabold text-green-600 mt-3">
                  ₹{product.price}
                </p>

                <div className="flex gap-4 mt-6">

                  <button
                    onClick={() => editProduct(product)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteProduct(product.id)}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-bold"
                  >
                    Delete
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default AdminUpload;