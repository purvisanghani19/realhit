import React, { useEffect, useState } from "react";
import ProductContainer from "../../Containers/ProductContainer";
import Banner from "../../Containers/Banner";
import sweatshirtbanner from "../../../img/banner/fourth_GIF.jpg";
import { BaseApi } from "../../../api/BaseApi";

const Sweatshirts = () => {
  const [Product, setProduct] = useState([]);
  // console.log("Product", Product);

  const getdata = async () => {
    try {
      const data = await BaseApi.get("/product/get");
      // console.log("data", data);
      if (data.status == 200) {
        const products = data.data.result;
        const tshirts = products?.filter(
          (item) => item.category === "setsweatshirts"
        );
        setProduct(tshirts);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getdata();
  }, [Product]);

  return (
    <>
      <Banner srcImg={sweatshirtbanner} />
      <div className="container-lg py-4">
        <ProductContainer title={"SWEATSHIRTS FOR MEN"} Products={Product} />
      </div>
    </>
  );
};

export default Sweatshirts;
