import Image from 'next/image'
import Nav from '../components/Nav'
import Homepage from '../components/Homepage'
import Footer from '@/components/Footer'
import Carditem from '@/components/Carditem'
import Product from '@/components/Product'
import Productitem from '@/components/Productitem'



export default function Home() {
  return (
   <div className='bg-[#380D41]'>
    <Nav/>
    <Homepage/>
    <Carditem/>
    <Product/>
    <Footer/>
   
  

   </div>
   
  )
}
