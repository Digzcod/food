import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";
import { imageLinkAddress } from "../../data/constants";

const HorizontalRestoCards = ({ item }) => {
  const { cloudinaryImageId, name, avgRating, sla, cuisines, areaName } =
    item || {};

  return (
    <Container fixed>
      <Card sx={{ display: "grid", mb: 2, width: 260, height: "350px" }}>
        <Box
          sx={{
            objectFit: "cover",
            overflow: "hidden",
            width: "100%",
            height: "200px",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: "100%", height: "100%" }}
            image={`${imageLinkAddress}${cloudinaryImageId}`}
            alt={name}
          />
        </Box>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="body2" sx={{fontSize:"1.01rem", fontWeight: "600" }}>
            {name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="success.secondary"
            component="div"
            sx={{fontWeight: "bolder"}}
          >
            {avgRating} ⨀ {sla?.slaString}
          </Typography>
          <Typography sx={{fontWeight:"bold", fontSize: '1rem'}} variant="body2" color="primary" component="div">
            {areaName}
          </Typography>
 
        </CardContent>
      </Card>
    </Container>
  );
};

export default HorizontalRestoCards;
