import React, { useEffect, useState } from "react";
import { BaseApi } from "../../../api/BaseApi";
import Banner from "../../Containers/Banner";
import ProductContainer from "../../Containers/ProductContainer";
import polobanner from "../../../img/banner/polobanner.jpg";

const PoloTshirts = () => {
  const [Product, setProduct] = useState([]);
  // console.log("Product", Product);

  const getdata = async () => {
    try {
      const data = await BaseApi.get("/product/get");
      // console.log("data", data);
      if (data.status == 200) {
        const products = data.data.result;
        const tshirts = products?.filter((item) => item.category === "polos");
        setProduct(tshirts);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);
  return (
    <>
      <Banner srcImg={polobanner} />
      <div className="container-lg py-4">
        <ProductContainer title={"OLD MONEY POLOS"} Products={Product} />
      </div>
    </>
  );
};

export default PoloTshirts;
