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
          `http://localhost:8080/admin/product/get-singleproduct/${id}`
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
    <div>
      <h1>Product Details</h1>
      {productdata.image && (
                    <img
                      src={`http://localhost:8080/${productdata.image.imagePath}`}
                      alt={productdata.name}
                      style={{
                        width: "200px",
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                  )}
      <p>{productdata.name}</p>
      <p>{productdata.price}</p>
<h3>similar products</h3>
    </div>
  );
};

export default ProductDescription;
