import React, { createContext, useState } from "react";

export const cart = createContext();
const Contex = ({ children }) => {
  const [cartitem, setCartitem] = useState([]);
  const [wishlist, setWishlist] = useState([]);


  //to add product to cart
  const handleaddproduct = (Product) => {
    const productIndex = cartitem.findIndex((item) => item.id === Product.id);
    if (productIndex !== -1) {
      const UpdatedCart = [...cartitem];
      UpdatedCart[productIndex].quantity += 1;
      setCartitem(UpdatedCart);
    } else {
      setCartitem([...cartitem, { ...Product, quantity: 1 }]);
    }
  };

   //to add product to wishlist
   const wishlistaddproduct = (Product) => {
    const productIndex =wishlist.findIndex((item) => item.id === Product.id);
    if (productIndex !== -1) {
      const UpdatedWishlist = [...wishlist];
      UpdatedWishlist[productIndex].quantity += 1;
      setWishlist(UpdatedWishlist);
    } else {
      setWishlist([...wishlist, { ...Product, quantity: 1 }]);
    }
  };

  //to remove product from cart
  const handleremoveproduct = (product) => {
    const productExist = cartitem.find((item) => item.id === product.id);
    if (productExist.quantity === 1) {
      setCartitem(cartitem.filter((item) => item.id !== product.id));
    } else {
      setCartitem(
        cartitem.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item
        )
      );
    }
  };

//remove single product from cart
  const SingleProductRemove = (product) => {
    const RemoveProduct = cartitem.filter((item) => item.id !== product.id);
    setCartitem(RemoveProduct);
  };
  //remove single product from cart
  const WishlistProductRemove = (product) => {
    const  WishlistRemoveProduct = wishlist.filter((item) => item.id !== product.id);
    setWishlist( WishlistRemoveProduct);
  };

  return (
    <div>
      <cart.Provider
        value={{
          cartitem,
          wishlist,
          handleaddproduct,
          SingleProductRemove,
          handleremoveproduct,
          wishlistaddproduct,
          WishlistProductRemove,
        }}
      >
        {children}
      </cart.Provider>
    </div>
  );
};

export default Contex;
