"use client"

import { Inter, Manrope, Raleway } from 'next/font/google';
import { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';

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
function Navbar() {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
      if (typeof window !== 'undefined') {
        const theme = localStorage.getItem('theme')
        if (theme === 'dark') setDarkMode(true)
      }
  
    }, [])
  
  
    useEffect(() => {
      if (darkMode) {
        document.documentElement.classList.add('dark')
        localStorage.setItem("theme", "dark")
      }
      else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem("theme", "light")
      }
  
    }, [darkMode])


    return (
        <div >
            <div className='flex justify-between items-center p-10 dark:bg-black dark:text-white'>
                <div className='flex justify-center items-center space-x-3'>

                    {/* Logo */}
                    <Link href='/' className={`${raleway.className} cursor-pointer `} >
                        <Image
                            src='/logo2.jpg'
                            width={200}
                            height={200}
                            alt="logo icon"
                            className='w-16 h-16 object-cover rounded-full '
                        />
                    </Link>
                    <h1 className={`${raleway.className} font-bold text-2xl `}>Dev Team</h1>
                </div>
                    {
              darkMode ?

              (<div
                onClick={() => {
                  darkMode ? setDarkMode(false) : setDarkMode(true)
                }}
                className='md:hidden flex transition ease-in  hover:text-gray-300  text-gray-500 duration-300 cursor-pointer hover:scale-105 hover:-translate-y-3' >
                <Image
                  src="/darkMode.png"
                  width={40}
                  height={40}
                  alt="darkMode icon"
                  className='object-contain md:w-auto md:h-auto w-10 h-10 '
                />
              </div>)
           
                :
                (<div
                  onClick={() => {
                    darkMode ? setDarkMode(false) : setDarkMode(true)
                  }}
                  className='md:hidden flex transition ease-in  hover:text-gray-300  text-gray-500 duration-300 cursor-pointer hover:scale-105 hover:-translate-y-3' >
                  <Image
                    src="/lightMode.png"
                    width={40}
                    height={40}
                    alt="lightMode icon"
                    className='object-contain md:w-auto md:h-auto w-10 h-10 '
                  />
                </div>)
                
              
              }

            </div>

        </div>
    )
}

export default Navbar