import React from 'react'
import UserProducts from '../Products/UserProducts'
import data from '../Products/Data';
//import Wishlist from '../Wishlist/Wishlist';
import Navbar from '../Header/Navbar';

const HomePage = () => {
    const {cartitems} = data;
  return (
    <div>
      <Navbar/>
      <UserProducts cartitems={cartitems}/>
      {/* <Wishlist cartitems={cartitems}/> */}
    </div>
  )
}

export default HomePage

