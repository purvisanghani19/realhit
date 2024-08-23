import React, { useContext, useEffect, useState } from "react";
import { CartContex, PaymentContex } from "../Context";
import { getProductData } from "../../utils/localStorageHelper";

const OrderPayment = (props) => {
  const [ShippingDetails, setShippingDetails] = useState({
    firstname: "",
    lastname: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });

  const [cardDetails, setcardDetails] = useState({
    cardNumber: "",
    paymentType: "",
    expirationDate: "",
    Cardholder: "",
  });

  const [ProductDetails, setProductDetails] = useState([]);

  const { total, AddtoCart } = useContext(CartContex);
  const finalTotal = total + 50;

  useEffect(() => {
    const prodata = getProductData();
    const transformedData = prodata.map((item) => ({
      itemId: item._id,
      name: item.name,
      quantity: item.quantity,
      price: item.price,
      total: item.quantity * item.price,
      category: item.category,
    }));
    setProductDetails(transformedData);
  }, [AddtoCart]);

  return (
    <>
      <PaymentContex.Provider
        value={{
          setShippingDetails,
          setcardDetails,
          cardDetails,
          ShippingDetails,
          ProductDetails,
          finalTotal,
        }}
      >
        {props.children}
      </PaymentContex.Provider>
    </>
  );
};

export default OrderPayment;
