import React, { useEffect, useState } from "react";
import SecoundGifbanner from "../../../img/banner/secound_GIF.jpg";
import Banner from "../../Containers/Banner";
import ProductContainer from "../../Containers/ProductContainer";
import { BaseApi } from "../../../api/BaseApi";

const Tshirts = () => {
  const [Product, setProduct] = useState([]);
  // console.log("Product", Product);

  const getdata = async () => {
    try {
      const data = await BaseApi.get("/product/get");
      // console.log("data", data);
      if (data.status == 200) {
        const products = data.data.result;
        const tshirts = products?.filter((item) => item.category === "tshirt");
        setProduct(tshirts);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getdata();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Banner srcImg={SecoundGifbanner} />
      <div className="container-lg py-4">
        <ProductContainer title={"UNISEX T-SHIRTS"} Products={Product} />
      </div>
    </>
  );
};

export default Tshirts;
