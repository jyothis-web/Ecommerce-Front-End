import { Alert, Button, Rating, Typography, styled } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import "./products.css";
import IconButton from "@mui/material/IconButton";
import SyncIcon from "@mui/icons-material/Sync";
import { cart } from "../Contex";
import img from "../images/new.png";

import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Prices } from "./filterProducts/Prices";
import { Radio } from "antd";
import toast from "react-hot-toast";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = ({ ps }) => {
  const {
    handleaddproduct,
    wishlistaddproduct,
    isProductInCart,
    isWishlist,
    WishlistcartitemRemove,
    getProducts,
    products,
    getCategories,
    categories,
    setProducts,
  } = useContext(cart);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);

  useEffect(() => {
    getCategories();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (checked.length || radio.length) {
      filterProduct();
    } else {
      getProducts();
    }
    // eslint-disable-next-line
  }, [checked, radio]);

  const Cartbtn = styled(Button)({
    width: "90px",
    fontSize: "10px",
    padding: "2px",
    color: "red",
    border: "1px solid red",
    "&:hover": { color: "white", backgroundColor: "red" },
  });

  //for check function of category
  const handlefilter = (value, categoryId) => {
    let all = [...checked];
    if (value) {
      all.push(categoryId);
    } else {
      all = all.filter((c) => c !== categoryId);
    }
    setChecked(all);
  };
  // for filtering the product
  const filterProduct = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8080/admin/product/filter-product`,
        { checked, radio }
        // {
        //   headers: {
        //     Authorization: `${token}`,
        //   },
        // }
      );
      console.log(response.data.products);
      setProducts(response.data.products);
      if (response.data.products.length === 0) {
        toast.success("no item found");
      }
    } catch (error) {
      console.error("Delete Error:", error);
      if (error.response) {
        console.error("Error Response:", error.response.data);
      }
    }
  };

  return (
    <div style={{ marginTop: "2.3cm", display: "flex" }}>
      <div>
        <div>
          <h3>categories</h3>
          {categories.map((c) => (
            <div key={c._id} className="filter-css">
              <input
                type="checkbox"
                id={`checkbox-${c._id}`}
                value={c._id}
                onChange={(e) => handlefilter(e.target.checked, c._id)}
                style={{
                  width: "16px",
                  height: "16px",
                  backgroundColor: "blue",
                }}
              />
              <label
                style={{ marginTop: "-5px" }}
                htmlFor={`checkbox-${c._id}`}
              >
                {c.name}
              </label>
            </div>
          ))}
        </div>
        <div>
          <h3>filter by price</h3>
          <Radio.Group onChange={(e) => setRadio(e.target.value)}>
            {Prices.map((price) => (
              <div key={price._id}>
                {" "}
                <Radio value={price.array}>{price.name}</Radio>
              </div>
            ))}
          </Radio.Group>
        </div>
        <div>
          <Button variant="contained" onClick={() => window.location.reload()}>
            Reset filter
          </Button>
        </div>
      </div>

      {/* {JSON.stringify(radio,null,4)} */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginBottom: "3cm",
          gap: ".5cm",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <div className="card">
            <div>
              {product.newimg > 0 && (
                <img src={img} alt="" style={{ width: "50px" }} />
              )}
            </div>

            <div
              className="cartimage"
              onMouseEnter={() => setHoveredProduct(product)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {hoveredProduct === product ? (
                <div>
                  {" "}
                  <Link to={`/ProductDescription/${product._id}`}>
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
                  </Link>
                </div>
              ) : (
                <div>
                   <Link to={`/ProductDescription/${product._id}`}>
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
                  </Link>
                </div>
              )}
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Link to="/ProductDescription">
                <div>
                  <Typography sx={{ marginTop: "10px", marginBottom: "10px" }}>
                    {product.name}
                  </Typography>
                </div>
              </Link>
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
      </div>
    </div>
  );
};

export default Products;
