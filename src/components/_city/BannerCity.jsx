import React from "react";
import { Box, Typography, useMediaQuery, Container } from "@mui/material";
import { banerImage } from "../../assets/_img/headerImg";
import useCityRestaurant from "../../hooks/useCityRestaurant";

const BannerCity = () => {
  const { headerName } = useCityRestaurant();
  const bannerResponsive = useMediaQuery("(max-width:780px)");
  const textResponsive = useMediaQuery("(max-width:1180px)");
  const h1Responsive = useMediaQuery("(min-width:1050px)");

  return (
    <Box
      sx={{
        display: "flex",
        height: textResponsive ? "380px" : "350px",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#e0d4fc",
        borderBottomRightRadius: "2rem",
        borderBottomLeftRadius: "2rem",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: textResponsive ? "center" : "space-between",
          flexWrap: textResponsive ? "wrap-reverse" : "wrap",
          alignItems: "center",
        }}
      >
        <Typography
          variant={h1Responsive ? "h3" : "h4"}
          sx={{
            fontWeight: "bolder",
            fontFamily: "serif",
            textAlign: "center",
            width: "auto",
          }}
        >
          Order Food Online in
          <Box
            color="primary.main"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              width: "500px",
              textTransform: "capitalize",
            }}
          >
            {" "}
            {headerName?.citySlug} City
          </Box>
        </Typography>

        <Box>
          <img
            src={banerImage}
            alt="Food"
            style={{ width: bannerResponsive ? "350px" : "450px" }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default BannerCity;
