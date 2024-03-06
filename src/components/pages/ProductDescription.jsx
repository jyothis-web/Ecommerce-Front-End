import { Rating } from "@mui/material";
import { Typography } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDescription = () => {
  const { id } = useParams(); // Use 'id' instead of 'product._id'
  const [productdata, setProductdata] = useState({});

  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/admin/product/get-singleproduct/${id}`
        );

        const product = response.data.product;
        setProductdata(product);
        console.log(product);
      } catch (error) {
        console.log(error);
      }
    };

    getSingleProduct();
  }, [id]); // Add 'id' as a dependency to re-run the effect when 'id' changes

  return (
    <div className='backgroundimg'>
      <h1>Product Details</h1>
      <div style={{ display: "flex", gap: "50px" }}>
        <div>
          {productdata.image && (
            <img
              src={`${process.env.REACT_APP_BASE_URL}/${productdata.image.imagePath}`}
              alt={productdata.name}
              style={{
                width: "300px",
                objectFit: "cover",
              }}
            />
          )}
        </div>
        <div>
          <h3>Product Name</h3>
          <p>{productdata.name}</p>
          <h3>Product Rating</h3>
          <Rating
            name="product-rating"
            value={productdata.rating}
            precision={0.5}
            readOnly
          />
          <h3>Product Description</h3>
          <p>{productdata.description}</p>
          <h3>Product Price</h3>
          <Typography variant="h6" marginBottom={2} marginTop={4}>
            {" "}
            ${productdata.price}/-
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
