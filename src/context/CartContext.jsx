import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const CartContext = createContext();

export const useCart = () =>
  useContext(CartContext);

export const CartProvider = ({
  children,
}) => {

  const [cartItems, setCartItems] =
    useState(() => {

      const savedCart =
        localStorage.getItem("cart");

      return savedCart
        ? JSON.parse(savedCart)
        : [];

    });

  // SAVE TO LOCAL STORAGE

  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cartItems)
    );

  }, [cartItems]);

  // ADD TO CART

  const addToCart = (product) => {

    const existingProduct =
      cartItems.find(
        (item) =>
          item.id === product.id
      );

    if (existingProduct) {

      setCartItems(
        cartItems.map((item) =>

          item.id === product.id
            ? {
                ...item,
                quantity:
                  item.quantity + 1,
              }
            : item
        )
      );

    } else {

      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1,
        },
      ]);

    }

  };

  // REMOVE ITEM

  const removeFromCart = (id) => {

    setCartItems(
      cartItems.filter(
        (item) => item.id !== id
      )
    );

  };

  // INCREASE QUANTITY

  const increaseQuantity = (id) => {

    setCartItems(
      cartItems.map((item) =>

        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }
          : item
      )
    );

  };

  // DECREASE QUANTITY

  const decreaseQuantity = (id) => {

    setCartItems(
      cartItems.map((item) =>

        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity - 1,
            }
          : item
      ).filter(
        (item) => item.quantity > 0
      )
    );

  };

  // TOTAL PRICE

  const totalPrice =
    cartItems.reduce(

      (total, item) =>

        total +
        item.price * item.quantity,

      0
    );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        totalPrice,
      }}
    >

      {children}

    </CartContext.Provider>
  );
};