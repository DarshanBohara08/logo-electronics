import Link from 'next/link'
import React from 'react'
import image from 'next/image'


const Navbar = () => {
    return (
        <div className='flex justify-between items-center '  >
            <div 
           style={{ boxShadow: '0px 6px 4px rgba(255, 255, 255, 0.25)' }}
            className='w-full h-[148px] flex  justify-between  '>
                <img src='image/navlogo.png' className='w-[139px] h-[64px] mt-[52px] ml-[375px]'></img>
                <div className='hidden w-full md:block md:w-auto'>
                    <ul className='font-medium flex flex-col p-4 mr-[508px] md:p-2 mt-16 rounded-lg md:flex-row md:space-x-8 '>
                        <li className='text-[25px] bg-gradient-to-r from-[#920AA8] via-[#E019CC] to-[#FE3873] bg-clip-text text-transparent leading-[38px] font-semibold border-2 border-fuchsia-400 rounded-full px-[25px]  ml-[1136px] '>
                            <Link href={'/'}>Home</Link>
                        </li>
                        <li className='text-[25px] bg-gradient-to-r from-[#920AA8] via-[#E019CC] to-[#FE3873] bg-clip-text text-transparent border-2 leading-[38px] font-semibold border-fuchsia-400 rounded-full px-[25px] flex items-center justify-center'>
                            <Link href={'/'}>Products</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar