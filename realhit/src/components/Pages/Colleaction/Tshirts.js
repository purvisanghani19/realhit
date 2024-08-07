import React, { useEffect, useState } from "react";
import SecoundGifbanner from "../../../img/banner/secound_GIF.jpg";
import Banner from "../../Containers/Banner";
import ProductContainer from "../../Containers/ProductContainer";
import axios from "axios";

const Tshirts = () => {
  const [Product, setProduct] = useState([]);
  // console.log("Product", Product);

  const getdata = async () => {
    try {
      const data = await axios.get("http://localhost:5500/product/get");
      // console.log("data", data);
      if (data.status == 200) {
        setProduct(data.data.result);
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
      <Banner srcImg={SecoundGifbanner} />
      <div className="container-lg py-4">
        <ProductContainer title={"UNISEX T-SHIRTS"} Products={Product} />
      </div>
    </>
  );
};

export default Tshirts;
