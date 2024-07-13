import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";



function Header() {
  const [appBarPosition, setAppBarPosition] = useState("static");
  const [elevate, setElevate] = useState(1);
  const [color, setColor] = useState("inherit");
  const [logoColor, setLogoColor] = useState("primary");

  const handleScroll = () => {
    const position = window.scrollY;
    if (position > 0) {
      setAppBarPosition("fixed");
      setElevate(3);
      setColor("primary");
      setLogoColor("text");
    } else {
      setAppBarPosition("static");
      setElevate(1);
      setColor("inherit");
      setLogoColor("primary");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar position={appBarPosition} color={color} elevation={elevate} sx={{py: '3px'}}>
      <Toolbar sx={{ display: "flex", justifyItems: "center" }}>
        <IconButton
          size="large"
          edge="start"
          color="primary"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon color={logoColor} />
        </IconButton>
        <Link to="/">
        <Typography
          variant="h6"
          component="div"
          color={logoColor}
          sx={{ fontWeight: "bolder" }}
          >
          LOGO
        </Typography>
          </Link>
        <Box sx={{ display: "flex", mx: "auto", cursor: "default" }}>
          <Typography variant="body1" color="inherit" sx={{ mx: "2rem" }}>
            Corporate
          </Typography>
          <Typography variant="body1" color="inherit" sx={{ mx: "2rem" }}>
            Search
          </Typography>
          <Typography variant="body1" color="inherit" sx={{ mx: "2rem" }}>
            Cart
          </Typography>
          <Typography variant="body1" color="inherit">
            Login
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
