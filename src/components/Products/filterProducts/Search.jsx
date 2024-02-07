import { Button } from "antd";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { cart } from "../../Contex";

const Search = () => {
  const { search, setSearch } = useContext(cart);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.get(
          `http://localhost:8080/admin/product/search/${search.keyword}`
        );
    
        if (response.data.success) {
          setSearch((prevSearch) => ({ ...prevSearch, result: response.data.result }));
          console.log(response.data.result);
          navigate("/SearchPage");
        } else {
          console.error("Search failed:", response.data.message || "Unknown error");
        }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ display: "flex" }}>
        <div className="input">
          <input
            style={{ width: "5.5cm", height: ".6cm", outline: "none" }}
            placeholder="search products"
            type="text"
            value={search.keyword}
            onChange={(e) => setSearch({ ...search, keyword: e.target.value })}
          ></input>
        </div>
        <div>
          <button style={{ background: "white" }} type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
