"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import "./prodDetail.css";
import Detailcard from "../../components/Detailcard";

const ProductDetails = ({ productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/${productId}`
      );
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  const thumbnails = Array(4).fill(product.thumbnail);

  return (
    <div id="prod-detail" className="relative bg-[#380D41]">
      <img
        src="/assets/image/Detail.png"
        alt=" Product details"
        className="w-full"
      />
      <div className="absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="font-routhem text-6xl text-[#F903AA] shadow-md">
          Product Details
        </h1>
      </div>
      <div className="flex items-center justify-center mt-[98px]">
        <h2 className="absolute left-1/2 font-normal text-4xl text-white  mt-[400px] font-routhem tracking-widest transform -translate-x-1/2">
          {product.title}
        </h2>
      </div>
      <div className="flex justify-center items-center ">
        <div className="bg-white rounded-lg shadow-md p-6 mt-[300px] w-[1138px] h-[436px]  gradient-border">
          <div className="flex">
            <div className="gradient-border">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-[377px] h-[375px]"
              />
            </div>
            <div className="w-2/3 pl-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-[54px]">
                {product.title}
              </h2>
              <div className="flex items-center mb-4">
                <span className="text-yellow-500 flex text-xl font-bold mr-2">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </span>
              </div>
              <p className="text-gray-600 mb-4 text-[16px] leading-[24px]">
                {product.description}
              </p>
              <p className="text-gray-600  text-[25px] mb-[10px]">
                Price: Rs {product.price}
              </p>
              <p className="text-gray-600  text-[25px]">
                Discount: {product.discountPercentage}%
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[119px] flex justify-center items-center">
        <Detailcard thumbnails={thumbnails} />
      </div>
      <div className="flex mt-[118px] justify-center gap-[39px] font-semibol text-white">
        <BsArrowLeftCircle size={47} />
        <BsArrowRightCircle size={47} />
      </div>
    </div>
  );
};

export default ProductDetails;
