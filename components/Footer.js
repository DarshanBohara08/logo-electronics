import React from 'react'
import image from 'next/image'
import card from 'components/card.css'

const Footer = () => {
  return (
    <div className='rid md:grid-cols-3 gap-[8%] h-[623px]'>
  <div className='w-full footer-mask'>
    <img src='image/footer.png' alt='Logo' className='w-full h-full mt-[249px] mask' />
   
  </div>

  <div className='text-center'>
    <p className='p-[39px] font-semibold'>COPYRIGHT 2021 lOGO ALL RIGHT RESERVED</p>
  </div>
</div>


  )
}

export default Footer