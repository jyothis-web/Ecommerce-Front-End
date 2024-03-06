import axios from "axios";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { cart } from "../../Contex";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";

const Search = () => {
  const { search, setSearch } = useContext(cart);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/admin/product/search/${search.keyword}`
      );

      if (response.data.success) {
        setSearch((prevSearch) => ({
          ...prevSearch,
          result: response.data.result,
        }));
        console.log(response.data.result);
        navigate("/SearchPage");
      } else {
        console.error(
          "Search failed:",
          response.data.message || "Unknown error"
        );
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
            placeholder="search products"
            type="text"
            value={search.keyword}
            onChange={(e) => setSearch({ ...search, keyword: e.target.value })}
          ></input>
        </div>
        <div className="search-btn">
          <IconButton type="submit">
            <SearchIcon />
          </IconButton>
        </div>
      </form>
    </div>
  );
};

export default Search;
