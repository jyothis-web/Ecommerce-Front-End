import { Button } from "@mui/material";
import React, { useContext } from "react";
import { cart } from "../../Contex";
import { Link, useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();
  const { auth, setAuth } = useContext(cart);

  const Handlelogout = () => {
    console.log(localStorage.getItem("auth"));
    try {
      setAuth({
        ...auth,
        user: null,
        token: "",
      });
      console.log("sucessfully logout");
      localStorage.removeItem("auth");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Button onClick={Handlelogout}>Logout</Button>
      {auth.user?.name ? `Welcome ${auth.user.name}` : ""}
      <Link to="/AdminLogin"><Button variant="contained">for admin</Button></Link>
    </div>
  );
};

export default UserDashboard;
