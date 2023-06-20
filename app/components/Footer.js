import React from 'react'
import image from 'next/image'
import Head from 'next/head';

const Footer = () => {
  return (

    <div>

      {/* background image */}
      <div
        className="flex justify-between text-white p-10 mt-96"
        style={{
            backgroundImage: `url('/image/footer.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '600px'
        }}
      >

            {/* footer contents */}
        <div className="flex justify-between text-white p-10 mt-96">
            
             {/* icons link */}
          <Head>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet" />
          </Head>

            {/*  right side contents */}
          <div className="flex items-center">

            <div className="flex flex-col">
              <img src="image/navlogo.png" alt="Logo" className="w-[139px] h-[64px] leading-[63.98px] ml-[35.16px]" />
              <p className="font-regular text-lg ml-4 w-[412.8px] h-[135px] mt-[35.16px]">
                LOGO is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
              </p>
            </div>

          </div>

              {/* middle contents */}
          <div className="flex items-center justify-center">

            <div id='links' className='text-center absolute right-[44.83%] tracking-widest uppercase'>
              <h1 className="font-bold mb-2 gradient-text leading-[30px] text-[25px] font-routhem">Useful Links</h1>
              <a href="/" className="block mb-1">Home</a>
              <a href="/" className="block mb-1">Product</a>
              <a href="/" className="block mb-1">About Us</a>
              <a href="/" className="block mb-1">Contact Us</a>
            </div>

          </div>

            {/* left contents with social media icons amd links */}
          <div className="flex items-center">

            <div className='absolute right-[11.25%]'>

              <h1 className="text-lg font-bold mb-2">
                Follow Us on
              </h1>

              <div className="flex space-x-2">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook text-xl w-[50px] h-[50px]"></i>
                </a>

                <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter text-xl w-[50px] h-[50px]"></i>
                </a>

                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram text-xl w-[50px] h-[50px]"></i>
                </a>

              </div>
              
            </div>
          </div>
        </div>
      </div>

          {/* copyright section  */}
          
        <div className="text-center mt-8">
          <p className="p-[39px] font-semibold">COPYRIGHT 2021 lOGO ALL RIGHT RESERVED</p>
        </div>
    </div>



  )
}

export default Footer