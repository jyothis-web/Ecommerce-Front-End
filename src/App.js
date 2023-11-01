import React from "react";
//import Addcart from "./cart/Addcart";
//import data from "./cart/Data";
//import Header from "./cart/Header/Header";
//import Products from "./cart/Products";
//import Cart from "./cart/signup/Cart";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Products from "./components/Products/Products";
import data from "./components/Products/Data";
import SwipeableTemporaryDrawer from "./components/Cart/Cartslide";
import Wishlist from "./components/Wishlist/Wishlist";

function App() {
   //const { productitems } = data;
   const {cartitems} = data;

  return (
    <div className="App">
      {/* <Header />
      <Routes>
        <Route path="/" element={<Products productitems={productitems} />} />
        <Route path="/Signup" element={<Cart />} />
        <Route path="/Addcart" element={<Addcart />} />
      </Routes> */}

      <Navbar/>
      <Routes>
      <Route path="/" element={<Products cartitems={cartitems}/>} />
      
      <Route path="/Wishlist" element={ <Wishlist cartitems={cartitems}/>} />
      </Routes>
      <SwipeableTemporaryDrawer/>
      
      
    </div>
  );
}

export default App;
