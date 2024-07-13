import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import HorizontalRestoCards from "../_city/HorizontalRestoCards";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BannerCity from "./BannerCity";
import useCityRestaurant from "../../hooks/useCityRestaurant";

const CityRestaurants = () => {
  const { load, cityRestaurants, place, scrollRef, handleScroll } =
    useCityRestaurant();

  if (load) {
    return (
      <h1 className="text-center font-bold text-5xl my-[10rem]">
        Load City Restaurants......
      </h1>
    );
  }

  return (
    <>
      <BannerCity />
      <Box
        sx={{
          display: "grid",
          alignItems: "center",
          justifyContent: "center",
          justifyItems: "center",
          mx: "auto",
          mt: ".2rem",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "70%", mt:"2rem" }}>
          <Typography
            color="inherit"
            sx={{ display: "flex", alignItems: "center" }}
            variant="h5"
           
            fontWeight={600}
          >
            Top restaurant chains in<Box sx={{ fontWeight:600, ml: ".3rem", textTransform: "capitalize"}} component="h5">{place?.citySlug}</Box>
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              sx={{ height: "100%" }}
              onClick={() => handleScroll("left")}
            >
              <ArrowBackIosIcon sx={{ fontSize: "2rem" }} color="primary" />
            </IconButton>
            <IconButton
              sx={{ height: "100%", ml: ".2rem" }}
              onClick={() => handleScroll("right")}
            >
              <ArrowForwardIosIcon sx={{ fontSize: "2rem" }} color="primary" />
            </IconButton>
          </Box>
        </Box>
        <Box
          sx={{
            overflowX: "auto",
            display: "flex",
            width: "70%",
            scrollBehavior: "smooth",
            "&::-webkit-scrollbar": { display: "none" },
            "-ms-overflow-style": "none", // IE and Edge
            "scrollbar-width": "none", // Firefox
          }}
          ref={scrollRef}
        >
          {cityRestaurants.map((city) => (
            <Box key={city?.info?.id}>
              <Link to={"/restaurants/" + city?.info?.id}>
                <HorizontalRestoCards item={city?.info} />
              </Link>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default CityRestaurants;
