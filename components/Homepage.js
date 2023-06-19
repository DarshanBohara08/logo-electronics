import React from 'react';
import Image from 'next/image';
import Nav from '../components/Nav';

const HomePage = () => {
  return (
    <div className='w-screen relative flex justify-center items-center mt-1.5 overflow-hidden'>
      {/* image */}
      <div className='w-full'>
        <img src='image/logo.png' alt='Logo' className='w-full h-full mt-0 object-cover' />
      </div>

      {/* heading inside image */}
      <div id='main' className='absolute top-[50%] transform -translate-y-1/2 text-center'>
        <h1 className='text-[60px] font-semibold text-[#F903AA] w-[602px] font-routhem leading-[129px] mt-[160px]'>
          Logo Electronics
        </h1>

        <div className='flex justify-center items-center'>
          {/* horizontal lines */}
          <div className='flex-grow h-2 w-16 bg-gradient-to-r from-[#A8620A] via-[#E09519] to-[#FEB838] my-1 rounded-full'></div>
          <p className='text-[20px] mx-4 font-routhem'>The techies you love</p>
          {/* horizontal lines */}
          <div className='flex-grow h-2 w-16 bg-gradient-to-r from-[#A8620A] via-[#E09519] to-[#FEB838] my-1 rounded-full'></div>
        </div>

        <div className='flex items-center p-6 mt-[74px]'>
        <button className='font-routhem text-left border-[5px]  text-[20px]   rounded-full text-white hover:scale-105 duration-300 ease-in-out px-10 h-[82px] w-[483px] py-2  relative'>
            View All Products
           <img
              src='image/Vector.png'
              className='w-[46.97px] h-[46.97px] ml-[46px] absolute top-[50%] -translate-y-1/2 right-4'
           />
        </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
