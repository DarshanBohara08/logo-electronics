import Image from 'next/image'
import Nav from '../components/Nav'
import Homepage from '../components/Homepage'
import Footer from '@/components/Footer'
import Carditem from '@/components/Carditem'
import Product from '@/components/Product'



export default function Home() {
  return (
   <div >
    <Nav/>
    <Homepage/>
    <Carditem/>
    <Product/> 
  

   </div>
   
  )
}
