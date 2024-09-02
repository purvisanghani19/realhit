import React, { useContext, useEffect, useState } from "react";
import addcartImg from "../../img/12.jpg";
import { RiShare2Line } from "react-icons/ri";
import CustomerReviw from "./CustomerReviw";
import ProductContainer from "./ProductContainer";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { CartContex } from "../../contexts/Context";
import { BaseApi, imgApi } from "../../api/BaseApi";

const ViewProductDetails = () => {
  const location = useLocation();
  const { product } = location.state;
  const context = useContext(CartContex);

  const [singleProduct, setsingleProduct] = useState({});
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [inputvalue, setInputvalue] = useState({
    color: "",
    size: "",
    quantity: 1,
  });

  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        const data = await BaseApi.get(
          `/product/get-single-product/${product}`
        );
        // console.log("data", data?.data);
        if (data.status === 200) {
          setsingleProduct(data?.data?.data);
          setInputvalue((prevalue) => ({
            ...prevalue,
            color: data?.data?.data?.color?.[0] || "",
            size: data?.data?.data?.size?.[0] || "",
          }));
        }
      } catch (error) {
        console.log(error);
      }
    };
    getSingleProduct();
  }, [product]);

  useEffect(() => {
    const getdata = async () => {
      try {
        const data = await BaseApi.get("/product/get");
        if (data.status === 200) {
          const products = data.data.result;
          const filtered = products?.filter(
            (item) =>
              item.category === singleProduct.category &&
              item._id !== singleProduct._id
          );
          setFilteredProducts(filtered);
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (singleProduct?.category) {
      getdata();
    }
  }, [singleProduct]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const addtocartitem = () => {
    context.addTocart({ ...singleProduct, ...inputvalue });
    window.scrollTo(0, 0);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputvalue((prevalue) => ({
      ...prevalue,
      [name]: value,
    }));
  };

  return (
    <div className="container-lg py-4">
      <div className="row row-cols-1 row-cols-md-2 my-3">
        <div className="h-100">
          <img
            src={`${imgApi}${singleProduct?.Img}`}
            alt="person in t-shirt"
            className="rounded-3 img-fluid w-100 h-75"
          />
        </div>
        <div className="px-4">
          <span className="text-uppercase fw-semibold realhit py-2 d-block">
            RealHit
          </span>
          <h4 className="fw-bold fs-1 py-2">{singleProduct?.name}</h4>
          <div className="gap-4 d-flex">
            <span className="text-decoration-line-through">Rs.1299.00</span>
            <span className="fw-bold">Rs.{singleProduct?.price}.00</span>
            <span className="badge border rounded-5 border text-black">
              sale
            </span>
          </div>
          <p className="py-2 m-0 font-sans" style={{ fontSize: "14px" }}>
            Tax included.
            <a href="#" className="text-black">
              Shipping
            </a>
            calculated at checkout.
          </p>

          <a href="#" className="text-black text link-underline-light">
            <span className="d-block my-3">
              share <RiShare2Line />
            </span>
          </a>

          <div>
            <span className="d-block font-sans">color</span>
            <select
              name="color"
              id="color"
              className="text-black py-3 p-3 border-black rounded-0 text-uppercase w-50"
              onChange={handleChange}
              value={inputvalue.color}
            >
              {singleProduct?.color?.map((item, index) => (
                <option key={index} name="color" value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="my-3">
            <span className="d-block font-sans">size</span>
            <select
              name="size"
              id="size"
              className="text-black py-3 p-3 border-black rounded-0 text-uppercase w-50"
              value={inputvalue.size}
              onChange={handleChange}
            >
              {singleProduct?.size?.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          {/* <div className="my-3">
            <span
              className="d-block font-sans"
              style={{ fontSize: "15px", color: "black" }}
            >
              Quantity
            </span>
            <div className="btn py-2 px-2 fs-semibold border-black rounded-0 text-black text-uppercase gap-4">
              <span
                name="quantity"
                onChange={handleChange}
                value={inputvalue.quantity}
                onClick={() => context.removeitem()}
                role="button"
                className="px-3 py-3"
              >
                -
              </span>
              <span className="px-3 py-3">{context.increment}</span>
              <span
                name="quantity"
                onChange={handleChange}
                value={inputvalue.quantity}
                onClick={() => context.plusitem()}
                role="button"
                className="px-3 py-3"
              >
                +
              </span>
            </div>
          </div> */}

          <div className="d-flex flex-column">
            <button
              onClick={() => {
                addtocartitem();
              }}
              className="btn w-100 py-2 pt-2 pb-2 my-1 border-black rounded-0 text-black"
            >
              Add to cart
            </button>
            <button className="btn w-100 py-2 pt-2 pb-2 my-1 border-none rounded-0 text-black shadow p-3 mb-5 bg-white">
              Buy Now
            </button>
          </div>

          <div>
            <div className="p-0 m-0 lh-base">
              <h4 className="fw-semibold py-2"> SHIPPING POLICY</h4>
              <p className="text-wrap">
                Your Order will be dispatched after 5-7 Business days after
                placing the Order, and depending upon your Pincode
                Serviceability you will be receiving the Order.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ----------------Customer review start----------- */}
      <CustomerReviw productId={product} />
      {/* ----------------Customer review end----------- */}

      {/* ----------------product container start----------- */}
      <ProductContainer
        title={"YOU MIGHT ALSO LIKE THESE"}
        Products={filteredProducts}
      />
      {/* ----------------product container end----------- */}
    </div>
  );
};

export default ViewProductDetails;
