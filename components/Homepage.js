import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import First from './First'
import Projects from './Projects'
import Services from './Services'

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
        <Services />
        <Projects />
    </div>
  )
}

export default Homepage