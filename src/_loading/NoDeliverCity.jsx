import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import deliver from "../assets/_img/Delivery1.png"
import { Link } from "react-router-dom";



const NoDeliverCity = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      sx={{ width: "100%", height: "100%", pt: "5rem" }}
    >

      <Box sx={{width: "600px",}}>
      <img className="w-[400px]" src={deliver} alt="delver"/>
        <Typography variant="body2" color={"primary.main"} sx={{ fontSize: "1.2rem", fontWeight: "bold"}}>
           Opps! We don't have online food service on this city
        </Typography>
        <Link to={"/"}>
         <Button size="small" sx={{my: ".5rem"}} variant="outlined">Back Home</Button>
        </Link>
      </Box>
    </Grid>
  );
};

export default NoDeliverCity;
