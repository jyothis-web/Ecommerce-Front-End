import { Button, Typography, styled } from "@mui/material";
import React, { useContext } from "react";
import "./products.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SyncIcon from "@mui/icons-material/Sync";
import { cart } from "../Contex";

const Products = ({cartitems}) => {
  const { handleaddproduct,wishlistaddproduct  } = useContext(cart);

  const Cartbtn = styled(Button)({
    width: "90px",
    fontSize: "10px",
    padding: "2px",
    color: "red",
    border: "1px solid red",
    "&:hover": { color: "white", backgroundColor: "red" },
  });

  return (
    <div style={{marginTop:"2.3cm"}}>
      {/* <h3 style={{ marginLeft: "2cm" }}>Audio & Electronics</h3> */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "3cm",
          flexWrap: "wrap",
        }}
      >
        {cartitems.map((cartitem) => (
          <div className="card">
            <img src={cartitem.new} alt="" className="new" width={"50px"} />
            <img src={cartitem.sale} alt="" className="sale" width={"50px"} />
            <div className="cartimage">
              <img className="img1" src={cartitem.Image} alt="" />
              {/* <img className="img2" src={cartitem.Image} alt="" /> */}
            </div>

            <div>
              <Typography fontSize={14} marginY={2.5}>
                {cartitem.name}
              </Typography>
            </div>
            <div className="rating">{cartitem.rating}</div>
            <div>
              <Typography variant="h6" marginBottom={2}>
                {" "}
                ${cartitem.price}/-
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginRight: "50px",
                cursor: "pointer",
              }}
            >
              <Cartbtn
                onClick={() => {
                  handleaddproduct(cartitem);
                }}
              >
                Add To Cart
              </Cartbtn>{" "}
              <FavoriteBorderIcon
                onClick={() => {
                  wishlistaddproduct(cartitem);
                }}
                sx={{ "&:hover": { color: "red" }, fontSize: "18px" }}
              />
              <SyncIcon
                sx={{ "&:hover": { color: "red" }, fontSize: "18px" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
