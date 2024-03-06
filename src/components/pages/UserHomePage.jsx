import React from 'react'
import UserNavbar from '../Header/UserNavbar'
import UserProducts from '../Products/UserProducts'
import Banner from '../Banner/Banner';


const UserHomePage = () => {

  return (
    <div className='backgroundimg'>
      <UserNavbar/>
      <Banner/>
      <UserProducts />
    </div>
  )
}

export default UserHomePage
