import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import {Link} from "react-router-dom"

const Navbar = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <AppBar position="sticky" sx={{backgroundColor:"#232F3D"}}>
        <Toolbar>
          <Typography>
            <LibraryBooksIcon />
            Book-Store
          </Typography>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={Link} to="/" label="Home" />
            <Tab LinkComponent={Link} to="/add" label="Add Book" />
            <Tab LinkComponent={Link} to="/books" label="Books" />
            <Tab LinkComponent={Link} to="/about-us" label="About Us" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
