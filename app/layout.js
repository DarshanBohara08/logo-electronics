import './globals.css'
import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'logo electronics',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
   
    <html lang="en">
      <body className='bg-[#380D41]' >{children}</body>
    </html>
    

  )
}
