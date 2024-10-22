import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import DrawerMenu from "../mobile_nav/Drawer";

function Header() {
  const [appBarPosition, setAppBarPosition] = useState("static");
  const [elevate, setElevate] = useState(1);
  const [color, setColor] = useState("inherit");
  const [logoColor, setLogoColor] = useState("primary");
  const cartItem = useSelector((store) => store.cart.items);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const mobileView = useMediaQuery("(max-width:767px)");

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
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isDrawerOpen && (
        <DrawerMenu
          open={isDrawerOpen}
          setOpen={() => setIsDrawerOpen(!isDrawerOpen)}
          items={cartItem.length}
        />
      )}
      <AppBar
        position={appBarPosition}
        elevation={elevate}
        sx={{
          // backgroundColor: "transparent", // Set background to transparent
          py: "3px",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyItems: "center" }}>
          {mobileView ? (
            <IconButton
              size="large"
              edge="start"
              color="primary"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                color={logoColor}
              />
            </IconButton>
          ) : (
            <>
              <Link to="/">
                <Typography
                  variant="h6"
                  component="div"
                  color={"inherit"}
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
                  <Link to="cart">
                    Cart
                    <AddShoppingCartOutlinedIcon
                      sx={{ height: "1.4rem", ml: ".2rem" }}
                    />
                    {cartItem.length > 0 && (
                      <Badge
                        color="secondary"
                        sx={{ ml: ".5rem", mt: "-1.5rem" }}
                        badgeContent={cartItem.length}
                      ></Badge>
                    )}
                  </Link>
                </Typography>
                <Typography variant="body1" color="inherit">
                  Login
                </Typography>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
