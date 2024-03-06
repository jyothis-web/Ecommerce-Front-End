import React from 'react'
import UserProducts from '../Products/UserProducts'
import Navbar from '../Header/Navbar';
import Banner from '../Banner/Banner';

const HomePage = () => {
  return (
    <div className='backgroundimg'>
      <Navbar/>
      <Banner/>
      <UserProducts/>
    </div>
  )
}

export default HomePage

