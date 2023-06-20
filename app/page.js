import Image from 'next/image'
import HomePage from './modules/mainpage/Homepage'
import Productcard from './modules/mainpage/Productcard'
import Carditem from './components/Carditem'
import Productitem from './components/Productitem'

export default function Home() {
  return (
    <div >
        <HomePage/>
        <Carditem/>
        <Productcard/>

    

    </div>

  )
}