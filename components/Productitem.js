import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsArrowRightCircle } from 'react-icons/bs'

const Productitem = () => {
    return (
        <div className="bg-white rounded-[36.42px] mt-[160px] shadow-md p-4 w-[397px] h-[542px]">
            <div className="flex mt-[32px] mitems-center">
                <p 
                className='mr-[189px] ml-[25px] justify-start uppercase  text-[21.8539px] font-normal leading-[33px] gradient-text'>
                RUBI-128K
              </p>
            
            
            <div className="flex justify-end">
                <AiOutlineHeart size={35} style={{ color: 'black' }} />
            </div>
            </div>
            <div className="text-center mt-10">
                <div className="flex justify-center items-center ">
                    <img src="image/product.png" alt="" className=" w-[311px] h-[189px] transition-all duration-300 ease-in-out transform hover:scale-105" />
                </div>
                <h2 className="text-[35px] justify-center w-[312px] h-[55px] font-normal text-black">Headphone-128K</h2>
                
                {/*view more arrow button  */}

                <button 
                style={{ background: 'linear-gradient(90deg, #920AA8 2%, #E019CC 20%, #FF81E3 48%, #FC75D6 52%, #DF55F6 60%, #E822EC 71%, #E80F91 75%, #EE19D8 81.25%, #FE3873 100%)' }} 
                className=" hover:bg-white uppercase hover:text-black text-[25px] rounded-full py-2 px-10 mt-12 mr-[51px] transition-all duration-300 ease-in-out w-[340px] h-[86px]  flex justify-center items-center">
                    View <BsArrowRightCircle size={47} style={{marginLeft: '51px'}}/>
                </button>
            </div>
        </div>
    );
};

export default Productitem;