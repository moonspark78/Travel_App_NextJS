import MobileNav from '@/Components/Helper/MobileNav';
import Navbar from '@/Components/Helper/Navbar';
import React from 'react'

const HomePage = () => {

  

  return (
    <div className='overflow-x-hidden'>
      {/* NavBar */}
      <MobileNav/>
      <Navbar/>
    </div>
  )
}

export default HomePage;