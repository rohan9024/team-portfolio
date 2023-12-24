"use client"

import { Inter, Manrope, Raleway } from 'next/font/google';
import Homepage from '../../components/Homepage';
import { Ping } from '@uiball/loaders'
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
export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <div className='w-screen h-screen bg-white'>
      {isLoading ? (
        <div className="flex items-center justify-center w-screen h-screen">
          <Ping color="black" size={100} />
        </div>
      ) : (
        <Homepage />
      )}
    </div>
  )
}
