import React, { useContext, useEffect, useState } from "react";
import { CartContex, PaymentContex } from "../Context";
import { getProductData, getUserdetails } from "../../utils/localStorageHelper";

const OrderPayment = (props) => {
  const [ShippingDetails, setShippingDetails] = useState();
  const [cardDetails, setcardDetails] = useState({
    cardNumber: "",
    paymentType: "",
    expirationDate: "",
    Cardholder: "",
  });
  const { total } = useContext(CartContex);
  const finalTotal = total + 50;

  const userid = getUserdetails();

  const [ProductDetails, setProductDetails] = useState(getProductData());

  const [OrderApiData, setOrderApiData] = useState({
    userId: userid._id,
    items: ProductDetails,
    totalAmount: finalTotal,
    shippingAddress: ShippingDetails,
  });

  console.log("OrderApiData", OrderApiData);

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
