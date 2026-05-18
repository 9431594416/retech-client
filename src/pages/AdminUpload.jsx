import { useState } from "react";

import {
  collection,
  addDoc,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

function AdminUpload() {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleUpload = async (e) => {

    e.preventDefault();

    try {

      await addDoc(collection(db, "products"), {
        name,
        price,
        image,
      });

      alert("Product Uploaded Successfully");

      setName("");
      setPrice("");
      setImage("");

    } catch (error) {

      console.log(error);
      alert("Upload Failed");

    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-5xl font-extrabold mb-10">
        Admin Upload
      </h1>

      <form
        onSubmit={handleUpload}
        className="bg-white p-8 rounded-3xl shadow-xl max-w-2xl"
      >

        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-4 rounded-xl mb-6"
          required
        />

        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border p-4 rounded-xl mb-6"
          required
        />

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full border p-4 rounded-xl mb-6"
          required
        />

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold"
        >
          Upload Product
        </button>

      </form>
    </div>
  );
}

export default AdminUpload;