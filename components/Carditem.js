import React from 'react'
import Image from 'next/image'
import Card from 'components/Card.js'


const Carditem = () => {
  return (
    <div className='w-ful p-20 bg-[#380D41] '>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <div className="flex space-x-[112px] mt-[245px]">
            <Card
                pname= 'Apple'
                imageSrc= 'image/apple.png'
                description= 'MacBook Pro 15-inch'
                price= '£350.00'
                size="w-[263px] h-[145px]  mb-[8.6px] mt-[31px] rounded-lg"
                
            />
            <Card
               pname= 'Keyboard'
               imageSrc= 'image/keyboard.png'
               description= 'AZERTY Keyboard'
               price= '£100.00'
               size="w-[215px] h-[119px] mb-[41px] mt-[31px]  rounded-lg"
               
            /> 
            <Card
                pname= 'Desktop'
                imageSrc= 'image/monitor.png'
                description= 'AZERTY Desktop'
                price= '£250.00'
                size="w-[180px] h-[163px] mb-[6px] mt-[22px]  rounded-lg"
                
            /> 
            <Card
                pname= 'Headphone'
                imageSrc= 'image/headphone.png'
                description= 'Wireless Headphone'
                price= '£50.00'
                size="w-[141px] h-[166px] mt-[19px]  mb-[7px] rounded-lg"
               
            /> 


            </div>

        </div>
        

    </div>
  )
}

export default Carditem