import React from "react";
import MenuBanner from "../components/_main/MenuBanner";
import RestroMain from "../components/RestroMain";
import { Box, Container, Grid, Typography } from "@mui/material";
import BtnContainer from "../components/_main/BtnContainer";

const Home = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      // justifyContent="center"
      sx={{ width: "100%", minHeight: "100vh", mt: "3rem" }} // Ensures the container takes full viewport width and height
    >
      <MenuBanner />
      <Container>
        <Typography variant="h5" fontWeight={600} color="primary" sx={{mt: "2rem", mb: "1rem"}}>
        We deliver to popular cities like
        </Typography>
        <BtnContainer />
      </Container>
    </Grid>
  );
};

export default Home;
