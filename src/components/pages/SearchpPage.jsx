import React, { useContext, useState } from 'react'
import IconButton from "@mui/material/IconButton";
import SyncIcon from "@mui/icons-material/Sync";
import { cart } from "../Contex";
import img from "../images/new.png";
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Typography } from 'antd';
import { Button, Rating } from '@mui/material';
import styled from '@emotion/styled';

const SearchPage = () => {
    const {
        handleaddproduct,
        wishlistaddproduct,
        isProductInCart,
        isWishlist,
        WishlistcartitemRemove,
    search
      } = useContext(cart);
      const [hoveredProduct, setHoveredProduct] = useState(null);
      const Cartbtn = styled(Button)({
        width: "90px",
        fontSize: "10px",
        padding: "2px",
        color: "red",
        border: "1px solid red",
        "&:hover": { color: "white", backgroundColor: "red" },
      });

  return (
    <div>
      <h3>Search results</h3>
      {search.result.map((product) => (
          <div className="card">
            {product.newimg > 0 && (
              <img src={img} alt="" style={{ width: "50px" }} className="new" />
            )}
            <img src={product.sale} alt="" className="sale" width={"50px"} />

            <div
              className="cartimage"
              onMouseEnter={() => setHoveredProduct(product)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {hoveredProduct === product ? (
                <div>
                  {" "}
                  {product.image && (
                    <img
                      src={`http://localhost:8080/${product.image.imagePath}`}
                      alt={product.name}
                      style={{
                        width: "200px",
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                  )}
                </div>
              ) : (
                <div>
                  {product.image && (
                    <img
                      src={`http://localhost:8080/${product.image.imagePath}`}
                      alt={product.name}
                      style={{
                        width: "200px",
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                  )}
                </div>
              )}
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div>
                <Typography sx={{ marginTop: "10px", marginBottom: "10px" }}>
                  {product.name}
                </Typography>
              </div>
              {product.rating > 0 && (
                <Rating
                  sx={{ fontSize: "12px" }}
                  name="read-only"
                  value={product.rating}
                  precision={0.5}
                  readOnly
                />
              )}
              <div>
                <Typography variant="h6" marginBottom={2} marginTop={4}>
                  {" "}
                  ${product.price}/-
                </Typography>
              </div>
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
              {isProductInCart(product.id) ? (
                <Cartbtn>Added to Cart</Cartbtn>
              ) : (
                <Cartbtn onClick={() => handleaddproduct(product)}>
                  Add to Cart
                </Cartbtn>
              )}
              {/* <Cartbtn
                onClick={() => {
                  handleaddproduct(p);
                }}
              >
           add to cart
              </Cartbtn>{" "} */}
              <div>
                <IconButton
                  onClick={() => {
                    wishlistaddproduct(product);
                  }}
                >
                  {isWishlist(product.id) ? (
                    <button>
                      <Favorite style={{ color: "red", fontSize: "18px" }} />
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        WishlistcartitemRemove(product);
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
                  wishlistaddproduct(p);
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
      <h6>{search?.result.length < 1 ? "No products found" : `Found ${search?.result.length} products`}</h6>
    </div>
  )
}

export default SearchPage
