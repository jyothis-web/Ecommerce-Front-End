import React, { useContext } from 'react'
import UserNavbar from '../Header/UserNavbar'
import UserProducts from '../Products/UserProducts'
import data from '../Products/Data';
import Wishlist from '../Wishlist/Wishlist';
import { cart } from '../Contex';

const UserHomePage = () => {
    const {cartitems} = data;
    const {
      auth, setAuth
    } = useContext(cart);
  return (
    <div>
      <UserNavbar/>
      <UserProducts cartitems={cartitems}/>
      <Wishlist cartitems={cartitems}/>
    </div>
  )
}

export default UserHomePage
