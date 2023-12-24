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
function Services() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const theme = localStorage.getItem('theme')
      if (theme === 'dark') setDarkMode(true)
    }

  }, [])
  return (
    <div className='dark:text-white dark:bg-black space-y-10 py-6'>
      <h1 className={`${manrope.className} text-3xl font-bold p-5`}>Our Services</h1>
      {/* <div
        className='object-contain w-screen h-72 bg-gradient-to-r from-green-200 via-green-300 to-blue-500'
      /> */}
      <div className='mx-10 flex flex-col justify-start items-center h-[530px] bg-gray-200 rounded-2xl shadow-2xl '>
        <Image
          src="/bg-1.png"
          width={3000}
          height={3000}
          alt="mockup icon"
          className='object-cover w-screen h-56 rounded-t-2xl'
        />
        <div className='flex flex-col justify-start items-center my-10 space-y-5 mx-5'>

        <h1 className={`${manrope.className}   text-2xl font-bold `}>Web development</h1>
        <h1 className={`${manrope.className}   text-lg text-gray-600 font-normal`}>Elevate your digital presence with our Full-Stack Development services, seamlessly blending web and mobile solutions while optimizing databases for unparalleled performance.</h1>
        </div>
      </div>
      <div className='mx-10 flex flex-col justify-start items-center h-[530px] bg-gray-200 rounded-2xl shadow-2xl '>
        <Image
          src="/bg-2.png"
          width={3000}
          height={3000}
          alt="mockup icon"
          className='object-cover w-screen h-56 rounded-t-2xl'
        />
        <div className='flex flex-col justify-start items-center my-10 space-y-5 mx-5'>

        <h1 className={`${manrope.className}   text-2xl font-bold `}>Machine Learning</h1>
        <h1 className={`${manrope.className} text-lg text-gray-600 font-normal`}>Empower your business with data-driven insights through our Machine Learning Services, covering predictive analytics of Natural Language Processing and Recommendation Systems.</h1>
        </div>
      </div>
      <div className='mx-10 flex flex-col justify-start items-center h-[530px] bg-gray-200 rounded-2xl shadow-2xl '>
        <Image
          src="/bg-3.png"
          width={3000}
          height={3000}
          alt="mockup icon"
          className='object-cover w-screen h-56 rounded-t-2xl'
        />
        <div className='flex flex-col justify-start items-center my-10 space-y-5 mx-5'>

        <h1 className={`${manrope.className}   text-2xl font-bold `}>Cloud Services</h1>
        <h1 className={`${manrope.className}   text-lg text-gray-600 font-normal`}>Soar to new heights with our Cloud Services, offering expert solutions in architecture design, serverless computing, and efficient DevOps practices for a future-ready digital landscape.</h1>
        </div>
      </div>

    </div>
  )
}

export default Services