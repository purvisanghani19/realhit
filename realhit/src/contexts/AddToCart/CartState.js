import React, { useEffect, useState } from "react";
import CartContex from "./CartContext";
import { getProductData, setProductData } from "../../utils/localStorageHelper";

const CartState = (props) => {
  const [AddtoCart, setAddtoCart] = useState(getProductData() || []);
  const [total, setTotal] = useState(0);

  const addTocart = (data) => {
    const index = AddtoCart.findIndex((item) => item._id === data._id);

    const updatedCart = [...AddtoCart];
    if (index !== -1) {
      updatedCart[index].quantity += data.quantity;
    } else {
      updatedCart.push(data);
    }
    setAddtoCart(updatedCart);
    setProductData(updatedCart);
    countTotal();
  };

  const plusitem = (id) => {
    const updateqnt = AddtoCart.map((item) =>
      item._id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setAddtoCart(updateqnt);
    setProductData(updateqnt);
    countTotal();
  };

  const removeitem = (id) => {
    const updatedCart = AddtoCart.map((item) => {
      if (item._id === id) {
        const updatedQuantity = (item.quantity || 0) - 1;
        if (updatedQuantity <= 0) {
          return null;
        } else {
          return { ...item, quantity: updatedQuantity };
        }
      }
      return item;
    }).filter(Boolean);

    setAddtoCart(updatedCart);
    setProductData(updatedCart);
    countTotal();
  };

  const countTotal = () => {
    const totalValue = AddtoCart.reduce(
      (acc, item) => acc + (item.quantity ?? 0) * item.price,
      0
    );
    setTotal(totalValue);
  };

  useEffect(() => {
    const storedata = getProductData();
    if (storedata) {
      setAddtoCart(storedata);
    }
  }, []);

  useEffect(() => {
    countTotal();
  }, [AddtoCart]);

  return (
    <>
      <CartContex.Provider
        value={{ addTocart, AddtoCart, plusitem, removeitem, total }}
      >
        {props.children}
      </CartContex.Provider>
    </>
  );
};

// export const CartCounter = () => {
//   return useContext(CartContex);
// };

export default CartState;
