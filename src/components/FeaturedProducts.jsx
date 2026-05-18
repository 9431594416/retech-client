import { useEffect, useState } from "react";

import {
  collection,
  getDocs,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

import ProductCard from "./ProductCard";

function FeaturedProducts() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const querySnapshot = await getDocs(
          collection(db, "products")
        );

        const productList = querySnapshot.docs.map(
          (doc) => ({
            id: doc.id,
            ...doc.data(),
          })
        );

        setProducts(productList);

      } catch (error) {

        console.log(error);

      }

    };

    fetchProducts();

  }, []);

  return (
    <section className="px-8 py-16">

      <h2 className="text-5xl font-bold text-center text-gray-800 mb-14">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {products.map((product) => (

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

    </section>
  );
}

export default FeaturedProducts;