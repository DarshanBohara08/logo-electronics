import React from 'react'
import Image from 'next/image'
import Nav from '../components/Nav'

const HomePage = () => {

  return (
    
    <div className='w-screen  relative flex justify-center items-center mt-1.5 '>
       
        {/* image */}
      <div className=' w-full '>
        <img src='image/logo.png' alt='Logo' className='w-full h-full mt-0  ' />
      </div>

          {/* heading inside image */}
      <div className='absolute top-[50%] transform -translate-y-1/2 text-center'>
          <h1 
            className='text-[60px] font-normal text-[#F903AA] w-[602px] font-routhem leading-[129px] mt-[160px]'>
            Logo Electronics
          </h1>

          <div className='flex justify-center items-center'>
            
              {/* horizontal lines */}
            <div className='flex-grow  h-2 w-16 bg-gradient-to-r from-[#A8620A] via-[#E09519] to-[#FEB838] my-1 rounded-full'>
            </div> 
              
            <p className='text-[20px] mx-4 font-routhem'>
              The techies you love
            </p>

              {/* horizontal lines */}
            <div className='flex-grow  h-2 w-16 bg-gradient-to-r from-[#A8620A] via-[#E09519] to-[#FEB838] my-1 rounded-full'>
            </div>
 
          </div>

          <div className='flex items-center border-[4.7px] border-fuchsia-400 rounded-[57.93px] p-6 mt-[74px]'>
              <p className='text-[18px] text-[#FFFFFF] font-routhem ml-[45.4px] mr-[122px] tracking-widest'>
                View All Products
              </p>

              <img src='image/Vector.png' className='w-[46.97px] h-[46.97px] ml-[46px]' />
          </div>


          
  
      </div>
  </div>
  );
};

export default HomePage;
