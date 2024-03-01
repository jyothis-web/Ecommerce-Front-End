import React from 'react'
import UserNavbar from '../Header/UserNavbar'
import UserProducts from '../Products/UserProducts'
import Wishlist from '../Wishlist/Wishlist';
import Banner from '../Banner/Banner';

const UserHomePage = () => {

  return (
    <div>
      <UserNavbar/>
      <Banner/>
      <UserProducts />
      <Wishlist />
    </div>
  )
}

export default UserHomePage
