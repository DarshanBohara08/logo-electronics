'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import Link from 'next/link';
import { BsArrowRightCircle } from 'react-icons/bs';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isFilled, setIsFilled] = useState(false); // Add isFilled state

  useEffect(() => {
    // Fetch the product data when the component mounts
    fetchProducts();
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substr(0, maxLength) + '...';
  };

  const fetchProducts = async () => {
    try {
      // Make an HTTP GET request to the API endpoint
      const response = await axios.get('https://dummyjson.com/products');

      // Set the fetched product data in the state
      setProducts(response.data.products.slice(0, 6)); // Display only the first 6 products
    } catch (error) {
      // Handle error if request fails
      console.error('Error fetching products:', error);
    }
  };

  const handleClick = () => {
    setIsFilled(!isFilled);
  };

  return (
    <div className="flex flex-col items-center mt-8">
          <h1 className="text-[60px] font-routhem text-[#F903AA] font-bold mt-[434px] mb-12  ">Products</h1>
      <div className="grid grid-cols-3 gap-20">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-[36px] shadow-md p-4 w-[397px] h-[542px] mb-40"
            >
              <div className="absolute font-medium text-[21px] mt-4 ml-4 gradient-text">
                <p>{product.brand}</p>
              </div>

              <div className="flex justify-end cursor-pointer mt-4">
                {isFilled ? (
                  <AiFillHeart
                    size={35}
                    style={{ color: 'red' }}
                    onClick={handleClick}
                  />
                ) : (
                  <AiOutlineHeart
                    size={35}
                    style={{ color: 'black' }}
                    onClick={handleClick}
                  />
                )}
              </div>
              <div className="text-center mt-10" id="product">
                <div className="flex justify-center items-center">
                  <img
                    src={product.thumbnail}
                    alt=""
                    className="w-[311px] h-[189px] transition-all duration-300 ease-in-out transform hover:scale-105"
                  />
                </div>
                <h2 className="text-[34px] w-[312px] h-[55px] font-regular mt-10 text-black">
                  {truncateText(product.title, 15)}
                </h2>

                <Link href={`/ProdDetails/${product.id}`}>
                  <button className="uppercase text-[25px] rounded-full py-2 px-10 mt-9 mr-[51px] transition-all duration-300 ease-in-out w-[340px] h-[86px] text-black flex justify-center items-center">
                    View
                    <BsArrowRightCircle
                      size={47}
                      style={{ marginLeft: '51px' }}
                    />
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
};

export default Product;
