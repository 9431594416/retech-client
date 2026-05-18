import { useState, useEffect } from "react";

import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

function AdminUpload() {

  const [name, setName] = useState("");

  const [price, setPrice] = useState("");

  const [description, setDescription] = useState("");

  const [image, setImage] = useState(null);

  const [loading, setLoading] = useState(false);

  const [products, setProducts] = useState([]);

  const [editingId, setEditingId] =
    useState(null);

  const [editName, setEditName] =
    useState("");

  const [editPrice, setEditPrice] =
    useState("");

  const [editDescription, setEditDescription] =
    useState("");

  const fetchProducts = async () => {

    const querySnapshot = await getDocs(
      collection(db, "products")
    );

    const productList = querySnapshot.docs.map(
      (docItem) => ({
        id: docItem.id,
        ...docItem.data(),
      })
    );

    setProducts(productList);

  };

  useEffect(() => {

    fetchProducts();

  }, []);

  const handleUpload = async (e) => {

    e.preventDefault();

    if (!image) {
      alert("Please select image");
      return;
    }

    try {

      setLoading(true);

      const formData = new FormData();

      formData.append("file", image);

      formData.append(
        "upload_preset",
        "retech_uploads"
      );

      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dwf9gjyjl/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      const imageUrl = data.secure_url;

      await addDoc(collection(db, "products"), {
        name,
        price,
        description,
        image: imageUrl,
      });

      alert("Product Uploaded Successfully");

      setName("");
      setPrice("");
      setDescription("");
      setImage(null);

      fetchProducts();

    } catch (error) {

      console.log(error);

      alert("Upload Failed");

    } finally {

      setLoading(false);

    }

  };

  const handleUpdate = async (id) => {

    try {

      await updateDoc(
        doc(db, "products", id),
        {
          name: editName,
          price: editPrice,
          description: editDescription,
        }
      );

      alert("Product Updated");

      setEditingId(null);

      fetchProducts();

    } catch (error) {

      console.log(error);

      alert("Update Failed");

    }

  };

  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Delete this product?"
    );

    if (!confirmDelete) return;

    try {

      await deleteDoc(doc(db, "products", id));

      alert("Product Deleted");

      fetchProducts();

    } catch (error) {

      console.log(error);

      alert("Delete Failed");

    }

  };

  return (
    <div className="min-h-screen bg-gray-100 px-8 py-16">

      <div className="max-w-2xl mx-auto bg-white p-10 rounded-2xl shadow-lg">

        <h1 className="text-4xl font-bold mb-10 text-center">
          Admin Dashboard
        </h1>

        <form
          onSubmit={handleUpload}
          className="space-y-6"
        >

          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full p-4 border rounded-xl"
            required
          />

          <input
            type="text"
            placeholder="Price"
            value={price}
            onChange={(e) =>
              setPrice(e.target.value)
            }
            className="w-full p-4 border rounded-xl"
            required
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
            className="w-full p-4 border rounded-xl h-40"
            required
          />

          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setImage(e.target.files[0])
            }
            className="w-full"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-600 text-white py-4 rounded-xl text-xl font-bold"
          >

            {loading
              ? "Uploading..."
              : "Upload Product"}

          </button>

        </form>

      </div>

      <div className="mt-20">

        <h2 className="text-4xl font-bold mb-10">
          Uploaded Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {products.map((product) => (

            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3">
                  {product.name}
                </h3>

                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>

                <p className="text-3xl font-bold text-emerald-600 mb-6">
                  ₹{product.price}
                </p>

                {editingId === product.id ? (

                  <div className="space-y-4">

                    <input
                      type="text"
                      value={editName}
                      onChange={(e) =>
                        setEditName(e.target.value)
                      }
                      className="w-full p-3 border rounded-xl"
                    />

                    <input
                      type="text"
                      value={editPrice}
                      onChange={(e) =>
                        setEditPrice(e.target.value)
                      }
                      className="w-full p-3 border rounded-xl"
                    />

                    <textarea
                      value={editDescription}
                      onChange={(e) =>
                        setEditDescription(
                          e.target.value
                        )
                      }
                      className="w-full p-3 border rounded-xl"
                    />

                    <button
                      onClick={() =>
                        handleUpdate(product.id)
                      }
                      className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold"
                    >
                      Update Product
                    </button>

                  </div>

                ) : (

                  <div className="space-y-4">

                    <button
                      onClick={() => {

                        setEditingId(product.id);

                        setEditName(product.name);

                        setEditPrice(product.price);

                        setEditDescription(
                          product.description
                        );

                      }}
                      className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold"
                    >
                      Edit Product
                    </button>

                    <button
                      onClick={() =>
                        handleDelete(product.id)
                      }
                      className="w-full bg-red-600 text-white py-3 rounded-xl font-bold"
                    >
                      Delete Product
                    </button>

                  </div>

                )}

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default AdminUpload;