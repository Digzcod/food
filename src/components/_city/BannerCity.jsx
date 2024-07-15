import React from "react";
import {
  Box,
  Typography,
  Stack,
  useMediaQuery,
  useTheme,
  Container,
} from "@mui/material";
import { banerImage } from "../../assets/_img/headerImg";
import useCityRestaurant from "../../hooks/useCityRestaurant";


const BannerCity = () => {
  const { headerName } = useCityRestaurant();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // console.log(headerName)

  return (
    <Box
      sx={{
        display: "flex",
        height: "350px",
        flexDirection: isSmallScreen ? "column" : "row",

        alignItems: "center",
        justifyContent: "space-between",
        padding: theme.spacing(2),
        backgroundColor: "#e0d4fc",
        // borderRadius: '10px',
        borderBottomRightRadius: "2rem",
        borderBottomLeftRadius: "2rem",
      }}
    >
      <Container sx={{ display: "flex",justifyContent:"space-between",  alignItems: "center", }}>
        <Typography
          variant={isSmallScreen ? "h4" : "h2"}
          sx={{
            // display: "flex",
            fontWeight: "bolder",
            fontFamily: "serif",
            textAlign: "center",
            width: "auto",
            mb: isSmallScreen ? 2 : 0,
          }}
        >
          Order Food Online in <Box color="primary.main" sx={{
            // display: "flex",
            fontWeight: "bold",
            textAlign: "center",
            width: "500px",
            textTransform: "capitalize",
            mb: isSmallScreen ? 2 : 0,
          }}> {headerName?.citySlug} City</Box>
          </Typography>
   
        <Stack direction="row" spacing={2} alignItems="center">
          <img
            src={banerImage}
            alt="Food"
            style={{ width: isSmallScreen ? "200px" : "450px", height: "auto" }}
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default BannerCity;
