import React from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import HorizontalRestoCards from "../_city/HorizontalRestoCards";
import BannerCity from "./BannerCity";
import useCityRestaurant from "../../hooks/useCityRestaurant";
import MenuBanner from "../_main/MenuBanner";
import CityShimmer from "../../_loading/CityShimmer";
import NoDeliverCity from "../../_loading/NoDeliverCity";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const CityRestaurants = () => {
  const { load, cityRestaurants, place, scrollRef, handleScroll } =
    useCityRestaurant();

  if (load) {
    return <CityShimmer />;
  }

  if (!cityRestaurants && !cityRestaurants) {
    return <NoDeliverCity />;
  }

  return (
    <>
      <BannerCity />
      <MenuBanner />
      <Box
        sx={{
          display: "grid",
          width:"70vw",
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
            width: "100%",
            // mt: "2rem",
          }}
        >
          <Typography
            color="inherit"
            sx={{ display: "flex", alignItems: "center", my: "1rem" }}
            variant="h5"
            fontWeight={600}
          >
          
            {/* <Box
              sx={{ fontWeight: 600, ml: ".3rem", textTransform: "capitalize" }}
              component="h5"
            >
            </Box> */}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center",}}>
            <IconButton color="inherit">
              <ArrowBackRoundedIcon
                onClick={() => handleScroll("left")}
                sx={{ fontSize: "2rem" }}
                // color="primary"
              />
            </IconButton>
            <IconButton  color="inherit">
              <ArrowForwardRoundedIcon
                onClick={() => handleScroll("right")}
                sx={{ fontSize: "2rem" }}
                // color="primary"
              />
            </IconButton>
          </Box>
        </Box>
          <Box
            sx={{
              overflowX: "auto",
              display: "flex",
              width: "70vw",
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
