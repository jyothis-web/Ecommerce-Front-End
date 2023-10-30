import React from "react";
import { Typography, styled, Button, Box } from "@mui/material";
import "../Products/products.css";
import { useContext } from "react";
import { cart } from "../Contex";
import SyncIcon from "@mui/icons-material/Sync";

const Cartbtn = styled(Button)({
  width: "90px",
  fontSize: "10px",
  padding: "2px",
  color: "red",
  border: "1px solid red",
  "&:hover": { color: "white", backgroundColor: "red" },
});
const Wishlist = () => {
  const { wishlist,cartitem, handleaddproduct, WishlistProductRemove } =
    useContext(cart);

  return (
    <div style={{ marginTop: "3.3cm" }}>
      <Typography variant="h4" textAlign={"center"}>
        WISHLIST
      </Typography>
      <Box margin={3}>
        {wishlist.length === 0 && (
          <div>
            <h4 style={{ textAlign: "center" }}>
              Your wishlist is currently empty
            </h4>
          </div>
        )}
      </Box>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          gap: "50px",
          marginBottom: "3cm",
          flexWrap: "wrap",
        }}
      >
        {wishlist.map((product) => (
          <div key={product.id}>
            <div className="card">
              <img src={product.new} alt="" className="new" width={"50px"} />
              <img src={product.sale} alt="" className="sale" width={"50px"} />
              <div className="cartimage">
                <img className="img1" src={product.Image} alt="" />
                {/* <img className="img2" src={cartitem.Image} alt="" /> */}
              </div>

              <div>
                <Typography fontSize={14} marginY={2.5} paddingLeft={1}>
                  {product.name}
                </Typography>
              </div>

              <div>
                <Typography variant="h6" marginBottom={2} paddingLeft={1}>
                  {" "}
                  $ {product.price} /-
                </Typography>
              </div>
              <div style={{ paddingLeft: "5px" }}>
                <Cartbtn
                  onClick={() => {
                    handleaddproduct(cartitem);
                  }}
                >
                  Add To Cart
                </Cartbtn>{" "}
                <SyncIcon
                  sx={{
                    marginBottom: "-5px",
                    marginLeft: "10px",
                    "&:hover": { color: "red" },
                    fontSize: "18px",
                  }}
                />
              </div>
              <Button
                sx={{ fontSize: "10px", color: "red" }}
                onClick={() => {
                  WishlistProductRemove(product);
                }}
              >
                Remove
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
