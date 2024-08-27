import React from "react";
import {
  Box,
  Button,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import HorizontalRestoCards from "../_city/HorizontalRestoCards";
import BannerCity from "./BannerCity";
import useCityRestaurant from "../../hooks/useCityRestaurant";
import MenuBanner from "../_main/MenuBanner";
import CityShimmer from "../../_loading/CityShimmer";
import NoDeliverCity from "../../_loading/NoDeliverCity";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import VerticalRestoCards from "./VerticalRestoCards";

const CityRestaurants = () => {
  const restCardStyle = useMediaQuery("(max-width:960px)");
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
          width: "70vw",
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
            sx={{
              display: "flex",
              alignItems: "center",
              my: "1rem",
              fontFamily: "sans-serif",
            }}
            variant="h5"
            fontWeight={600}
          >
            {place?.title}
          </Typography>
          {!restCardStyle ? (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton color="inherit">
                <ArrowBackRoundedIcon
                  onClick={() => handleScroll("left")}
                  sx={{ fontSize: "1.8rem" }}
                  // color="primary"
                />
              </IconButton>
              <IconButton color="inherit">
                <ArrowForwardRoundedIcon
                  onClick={() => handleScroll("right")}
                  sx={{ fontSize: "1.8rem" }}
                />
              </IconButton>
            </Box>
          ) : null}
        </Box>
        {!restCardStyle ? (
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
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "1.5rem",
            }}
          >
            {cityRestaurants &&
              cityRestaurants.map((city) => (
                <Link to={"/restaurants/" + city?.info?.id}>
                  <VerticalRestoCards item={city?.info} />
                </Link>
              ))}
          </Box>
        )}
      </Box>
    </>
  );
};

export default CityRestaurants;
