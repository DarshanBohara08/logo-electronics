'use client'

import React, { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { BsArrowRightCircle } from 'react-icons/bs';
import Link from 'next/link';

const Productitem = () => {
  const [isFilled, setIsFilled] = useState(false);

  const handleClick = () => {
    setIsFilled(!isFilled);
  };

  return (
    <div className="bg-white rounded-[36.42px] mt-[160px] shadow-md p-4 w-[397px] h-[542px]">
      <div id="rubi" className="flex mt-[32px] mitems-center">
        <p className="mr-[189px] ml-[25px] justify-start uppercase text-[21.8539px] font-normal leading-[33px] gradient-text">
          RUBI-128K
        </p>

        {/* favorites heart */}
        <div className="flex justify-end cursor-pointer">
          {isFilled ? (
            <AiFillHeart size={35} style={{ color: 'red' }} onClick={handleClick} />
          ) : (
            <AiOutlineHeart size={35} style={{ color: 'black' }} onClick={handleClick} />
          )}
        </div>
      </div>

      <div className="text-center mt-10" id="product">
        {/* product image  */}
        <div className="flex justify-center items-center ">
          <img
            src="image/product.png"
            alt=""
            className=" w-[311px] h-[189px] transition-all duration-300 ease-in-out transform hover:scale-105"
          />
        </div>

        <h2 className="text-[35px] justify-center w-[312px] h-[55px] font-normal text-black">
          Headphone-128K
        </h2>

        {/*view more arrow button  */}
        <div className="button-container">
          <Link href="/ProdDetails">
            
              <button className="uppercase text-[25px] rounded-full py-2 px-10 mt-12 mr-[51px] transition-all duration-300 ease-in-out w-[340px] h-[86px] text-black flex justify-center items-center">
                View
                <BsArrowRightCircle size={47} style={{ marginLeft: '51px' }} />
              </button>
           
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Productitem;
