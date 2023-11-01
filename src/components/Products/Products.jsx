import { Button, Typography, styled } from "@mui/material";
import React, { useContext, useState } from "react";
import "./products.css";
import IconButton from "@mui/material/IconButton";
import SyncIcon from "@mui/icons-material/Sync";
import { cart } from "../Contex";

import { Favorite, FavoriteBorder } from "@mui/icons-material";

const Products = ({ cartitems }) => {
  const {
    handleaddproduct,
    wishlistaddproduct,
    isProductInCart,
    isWishlist,

    WishlistcartitemRemove,
  } = useContext(cart);

  const Cartbtn = styled(Button)({
    width: "90px",
    fontSize: "10px",
    padding: "2px",

    color: "red",
    border: "1px solid red",
    "&:hover": { color: "white", backgroundColor: "red" },
  });
  const [hoveredProduct, setHoveredProduct] = useState(null);
  return (
    <div style={{ marginTop: "2.3cm" }}>
      {/* <h3 style={{ marginLeft: "2cm" }}>Audio & Electronics</h3> */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginBottom: "3cm",
          gap: ".5cm",
          flexWrap: "wrap",
        }}
      >
        {cartitems.map((cartitem) => (
          <div className="card">
            <img src={cartitem.new} alt="" className="new" width={"50px"} />
            <img src={cartitem.sale} alt="" className="sale" width={"50px"} />

            <div
              className="cartimage"
              onMouseEnter={() => setHoveredProduct(cartitem)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {hoveredProduct === cartitem ? (
                <div className="img1">
                  {" "}
                  <img
                    src={cartitem.image}
                    alt=""
                    srcset=""
                    style={{ width: "100%" }}
                  />
                </div>
              ) : (
                <div className="img2">
                  {" "}
                  <img
                    src={cartitem.Image}
                    alt=""
                    srcset=""
                    style={{ width: "100%" }}
                  />
                </div>
              )}
            </div>

            <div>
              <Typography fontSize={16} marginY={2.5}>
                {cartitem.name}
              </Typography>
            </div>
            <div className="rating">{cartitem.rating}</div>
            <div>
              <Typography variant="h6" marginBottom={2} marginTop={4}>
                {" "}
                ${cartitem.price}/-
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "22px",
                justifyContent: "space-between",
                marginRight: "50px",
                cursor: "pointer",
              }}
            >
              {isProductInCart(cartitem.id) ? (
                <Cartbtn>Added to Cart</Cartbtn>
              ) : (
                <Cartbtn onClick={() => handleaddproduct(cartitem)}>
                  Add to Cart
                </Cartbtn>
              )}
              {/* <Cartbtn
                onClick={() => {
                  handleaddproduct(cartitem);
                }}
              >
           add to cart
              </Cartbtn>{" "} */}
              <div>
                <IconButton
                  onClick={() => {
                    wishlistaddproduct(cartitem);
                  }}
                >
                  {isWishlist(cartitem.id) ? (
                    <button>
                      <Favorite style={{ color: "red", fontSize: "18px" }} />
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        WishlistcartitemRemove(cartitem);
                      }}
                    >
                      {" "}
                      <FavoriteBorder
                        style={{ color: "black", fontSize: "19px" }}
                      />
                    </button>
                  )}
                </IconButton>
                {/* <FavoriteBorderIcon 
                onClick={() => {
                  wishlistaddproduct(cartitem);
                }}
                sx={{ "&:hover": { color: "red" }, fontSize: "18px", }}
              /> */}
              </div>
              <SyncIcon
                sx={{ "&:hover": { color: "red" }, fontSize: "19px" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
