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
  const [category, setCategory] =
  useState("");
  const [description, setDescription] =
    useState("");

  const [image, setImage] = useState(null);

  const [previewImage, setPreviewImage] =
    useState("");

  const [loading, setLoading] = useState(false);

  const [editingId, setEditingId] =
    useState(null);

  const productsCollection = collection(
    db,
    "products"
  );

  // FETCH PRODUCTS

  const fetchProducts = async () => {

    const data = await getDocs(
      productsCollection
    );

    const filteredData = data.docs.map(
      (doc) => ({
        ...doc.data(),
        id: doc.id,
      })
    );

    setProducts(filteredData);

  };

  useEffect(() => {

    fetchProducts();

  }, []);

  // IMAGE UPLOAD

  const uploadImage = async () => {

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

    return data.secure_url;

  };

  // CLEAR FORM

  const clearForm = () => {

    setName("");
    setPrice("");
    setDescription("");

    setCategory("");

    setImage(null);

    setPreviewImage("");

    setEditingId(null);

  };

  // ADD PRODUCT

  const addProduct = async (e) => {

    e.preventDefault();

    if (
      !name ||
      !price ||
      !description ||
      !image
    ) {
      alert("Please fill all fields");
      return;
    }

    try {

      setLoading(true);

      const imageUrl =
        await uploadImage();

     await addDoc(productsCollection, {
  name,
  price,
  description,
  category,
  image: imageUrl,
});

      clearForm();

      fetchProducts();

      alert("Product Uploaded");

    } catch (error) {

  console.error(error);

  alert(error.message);

}finally {

      setLoading(false);

    }

  };

  // DELETE PRODUCT

  const deleteProduct = async (id) => {

    const confirmDelete =
      window.confirm(
        "Delete this product?"
      );

    if (!confirmDelete) return;

    await deleteDoc(
      doc(db, "products", id)
    );

    fetchProducts();

    alert("Product Deleted");

  };

  // EDIT PRODUCT

  const editProduct = (product) => {

    setEditingId(product.id);

    setCategory(product.category);
    
    setName(product.name);

    setPrice(product.price);

    setDescription(product.description);

    setImage(null);

    setPreviewImage(product.image);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };

  // UPDATE PRODUCT

  const updateProduct = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      let imageUrl = previewImage;

      if (image) {

        imageUrl =
          await uploadImage();

      }

      const updateData = {
  name,
  price,
  description,
  category,
  image: imageUrl,
};

      const productDoc = doc(
        db,
        "products",
        editingId
      );

      await updateDoc(
        productDoc,
        updateData
      );

      clearForm();
      

      fetchProducts();

      alert("Product Updated");

    } catch (error) {

      console.log(error);

      alert("Update Failed");

    } finally {

      setLoading(false);

    }

  };

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-12">

      {/* FORM */}

      <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-xl">

        <h1 className="text-5xl font-extrabold text-center text-green-600 mb-10">
          Admin Dashboard
        </h1>

        <form
          onSubmit={
            editingId
              ? updateProduct
              : addProduct
          }
          className="space-y-6"
        >

          {/* PRODUCT NAME */}

          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full p-4 border rounded-2xl"
          />

          {/* PRICE */}

          {/* PRICE */}

<input
  type="text"
  placeholder="Price"
  value={price}
  onChange={(e) =>
    setPrice(e.target.value)
  }
  className="w-full p-4 border rounded-2xl"
/>

{/* CATEGORY */}

<select
  value={category}
  onChange={(e) =>
    setCategory(e.target.value)
  }
  className="w-full p-4 border rounded-2xl"
>

  <option value="">
    Select Category
  </option>

  <option value="Laptop">
    Laptop
  </option>

  <option value="Phone">
    Phone
  </option>

  <option value="Monitor">
    Monitor
  </option>

  <option value="Accessories">
    Accessories
  </option>

  <option value="Kitchen">
    Kitchen
  </option>

</select>


          {/* DESCRIPTION */}

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) =>
              setDescription(
                e.target.value
              )
            }
            className="w-full p-4 border rounded-2xl h-40"
          />

          {/* IMAGE */}

          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setImage(
                e.target.files[0]
              )
            }
            className="w-full"
          />

          {/* IMAGE PREVIEW */}

          {(image || previewImage) && (

            <img
              src={
                image
                  ? URL.createObjectURL(
                      image
                    )
                  : previewImage
              }
              alt="preview"
              className="w-full h-64 object-cover rounded-2xl"
            />

          )}

          {/* BUTTON */}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl text-xl font-bold transition"
          >

            {loading
              ? "Please Wait..."
              : editingId
              ? "Update Product"
              : "Upload Product"}

          </button>

        </form>

      </div>

      {/* PRODUCTS */}

      <div className="mt-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          Uploaded Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {products.map((product) => (

            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition"
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

                <p className="mt-3 text-gray-600">
                  {product.description}
                </p>

                <p className="mt-4 text-4xl font-extrabold text-green-600">
                  ₹{product.price}
                </p>

                <div className="flex gap-4 mt-8">

                  {/* EDIT */}

                  <button
                    type="button"
                    onClick={() =>
                      editProduct(product)
                    }
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold"
                  >
                    Edit
                  </button>

                  {/* DELETE */}

                  <button
                    type="button"
                    onClick={() =>
                      deleteProduct(
                        product.id
                      )
                    }
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