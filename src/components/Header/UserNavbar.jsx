import React, { useContext } from "react";
import "./navbar.css";
import IconButton from "@mui/material/IconButton";
import { Avatar, Badge } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import SwipeableTemporaryDrawer from "../Cart/Cartslide";
import { cart } from "../Contex";

const UserNavbar = () => {
  const { cartitem, wishlist } = useContext(cart);
  return (
    <div style={{ position: "fixed", top: "0", width: "100%", zIndex: "10" }}>
      <div className="nav">
        <div className="logo" style={{ marginLeft: "1cm" }}>
          {/* <h5>you first order is free</h5> */}
          <img src="./images/logo.webp" alt="" />
        </div>
        <div className="input">
          <input
            style={{ width: "5.5cm", height: ".6cm", outline: "none" }}
            placeholder="search"
            type="text"
          ></input>
        </div>
        <div className="hotline">HOTLINE: 1-900-9999</div>
        <div className="right-nav">
         <Link to="/UserDashboard"> <Avatar /></Link>

          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/Wishlist"
          >
            <p style={{ marginRight: "12px" }}>
              {" "}
              {/* display:{wishlist.length === 0 ? "none" : "block"} */}
              <Badge
                badgeContent={wishlist.length === 0 ? "0" : wishlist.length}
                color="error"
              >
                <FavoriteBorderIcon />
              </Badge>
            </p>
          </Link>

          <p style={{ paddingBottom: "9px" }}>
            <Badge
              style={{ marginRight: "15px", marginTop: "10px" }}
              badgeContent={cartitem.length === 0 ? "0" : cartitem.length}
              color="error"
            >
              {" "}
              <IconButton sx={{ padding: "0px" }}>
                {" "}
                <SwipeableTemporaryDrawer />
              </IconButton>
            </Badge>
          </p>
        </div>
      </div>
      <div
        className="nav2"
        style={{
          display: "flex",
          width: "100%",
          height: "30px",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "40px",
          paddingLeft: "50px",
        }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <p>Home</p>
        </Link>
        <p>bestsellers</p>
        <p>All New Sale</p>
      </div>
    </div>
  );
};

export default UserNavbar;
