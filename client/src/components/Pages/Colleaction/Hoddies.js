import React, { useEffect, useState } from "react";
import { BaseApi } from "../../../api/BaseApi";
import Banner from "../../Containers/Banner";
import ProductContainer from "../../Containers/ProductContainer";
import hoddiebanner from "../../../img/banner/third_GIF.jpg";

const Hoddies = () => {
  const [Product, setProduct] = useState([]);
  // console.log("Product", Product);

  const getdata = async () => {
    try {
      const data = await BaseApi.get("/product/get");
      // console.log("data", data);
      if (data.status == 200) {
        const products = data.data.result;
        const tshirts = products?.filter((item) => item.category === "hoodies");
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
      <Banner srcImg={hoddiebanner} />
      <div className="container-lg py-4">
        <ProductContainer title={"HOODIES FOR MEN"} Products={Product} />
      </div>
    </>
  );
};

export default Hoddies;
