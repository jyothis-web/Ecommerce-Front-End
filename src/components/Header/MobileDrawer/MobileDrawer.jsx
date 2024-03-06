import { Drawer, IconButton } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Search from "../../Products/filterProducts/Search";



const MobileDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div>
      <div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <IconButton onClick={() => setDrawerOpen(true)}>
            <MenuIcon style={{color:"white"}}/>
          </IconButton>
        </div>

        <Drawer
           anchor="top"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
         <div>hello</div>
         <Search/>
         <h5>Home</h5>
        </Drawer>
      </div>
    </div>
  );
};

export default MobileDrawer;
