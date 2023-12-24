"use client"

import { Inter, Manrope, Raleway } from 'next/font/google';
import { useEffect, useState } from 'react';
import Image from 'next/image'

const raleway = Raleway({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
});
const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
});
const manrope = Manrope({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
});
function Main() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
      if (typeof window !== 'undefined') {
          const theme = localStorage.getItem('theme')
          if (theme === 'dark') setDarkMode(true)
      }

  }, [])
  return (
    <div className='dark:text-white dark:bg-black'>
      <h1 className={`${manrope.className} text-3xl font-bold p-5`}>Past Projects</h1>
      <Image
        src="/mockup.png"
        width={3000}
        height={3000}
        alt="mockup icon"
        className='object-contain w-screen h-auto'
      />
      <Image
        src="/smm.png"
        width={3000}
        height={3000}
        alt="mockup icon"
        className='object-contain w-screen h-auto'
      />
      <Image
        src="/smm2.jpg"
        width={5000}
        height={5000}
        alt="mockup icon"
        className='object-contain w-screen md:w-[1000px] h-auto'
      />
      <Image
        src="/examcell.png"
        width={3000}
        height={3000}
        alt="mockup icon"
        className='object-contain w-screen h-auto'
      />
      <Image
        src="/bustrackingMockup.png"
        width={3000}
        height={3000}
        alt="mockup icon"
        className='object-contain w-screen h-auto'
      />
    </div>
  )
}

export default Main