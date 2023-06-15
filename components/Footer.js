import React from 'react'
import image from 'next/image'

const Footer = () => {
  return (
    <div className='rid md:grid-cols-3 gap-[8%] h-[623px] ' >
        <div>
            <img src='/image/navlogo.png'></img>
            <p> 
                lOGO is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
            </p>

        </div>
        <div>
            <h1>Useful Links</h1>
        </div>
    </div>

  )
}

export default Footer