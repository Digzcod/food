import React from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import HorizontalRestoCards from "../_city/HorizontalRestoCards";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BannerCity from "./BannerCity";
import useCityRestaurant from "../../hooks/useCityRestaurant";
import MenuBanner from "../_main/MenuBanner";

const CityRestaurants = () => {
  const { load, cityRestaurants, place, scrollRef, handleScroll } =
    useCityRestaurant();

  if (load) {
    return (
      <h1 className="text-center font-bold text-5xl my-[10rem]">
        Load City Restaurants....
      </h1>
    );
  }

  if (!cityRestaurants && !cityRestaurants) {
    return (
      <h1 className="text-center font-semibold text-4xl my-[10rem]">
        We don't have online delivery food on this city
      </h1>
    );
  }

  return (
    <>
      <BannerCity />
      <MenuBanner />
      <Box
        sx={{
          display: "grid",
          alignItems: "center",
          justifyContent: "center",
          justifyItems: "center",
          mx: "auto",
          mt: ".2rem",
          mb: "5rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "70%",
            // mt: "2rem",
          }}
        >
          <Typography
            color="inherit"
            sx={{ display: "flex", alignItems: "center", my: "1rem" }}
            variant="h5"
            fontWeight={600}
          >
            Top restaurant chains in
            {place?.citySlug}
            {/* <Box
              sx={{ fontWeight: 600, ml: ".3rem", textTransform: "capitalize" }}
              component="h5"
            >
            </Box> */}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton>
              <ArrowBackIosIcon
                onClick={() => handleScroll("left")}
                sx={{ fontSize: "1.5rem" }}
                color="primary"
              />
            </IconButton>
            <IconButton>
              <ArrowForwardIosIcon
                onClick={() => handleScroll("right")}
                sx={{ fontSize: "1.5rem" }}
                color="primary"
              />
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
          {cityRestaurants &&
            cityRestaurants.map((city) => (
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
