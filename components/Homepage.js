import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Main from './Main'
import First from './First'

function Homepage() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
      if (typeof window !== 'undefined') {
          const theme = localStorage.getItem('theme')
          if (theme === 'dark') setDarkMode(true)
      }

  }, [])
  
  return (
    <div className='dark:text-white dark:bg-black'>
        <Navbar />
        <First />
        <Main />
    </div>
  )
}

export default Homepage