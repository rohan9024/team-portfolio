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
function First() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
      if (typeof window !== 'undefined') {
          const theme = localStorage.getItem('theme')
          if (theme === 'dark') setDarkMode(true)
      }

  }, [])
  return (
    <div className='dark:text-white dark:bg-black space-y-10 py-6'>
        <h1 className={`${manrope.className} text-3xl font-semibold p-5`}>Your Dedicated Hub for Cutting-edge Software Solutions.</h1>
        <Image
        src="/homepageVector.jpg"
        width={3000}
        height={3000}
        alt="homepageVector icon"
        className='object-contain w-screen h-auto py-10'
      />
    </div>
  )
}

export default First