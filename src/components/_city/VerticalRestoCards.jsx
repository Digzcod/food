import React from "react";
import useCityRestaurant from "../../hooks/useCityRestaurant";
import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { imageLinkAddress } from "../../data/constants";

const VerticalRestoCards = ({ item, mobile }) => {
  const { cloudinaryImageId, name, avgRating, sla, cuisines, areaName } =
    item || {};
  return (
    <Card key={item?.id} sx={{ mb: 2, width: mobile? "290px" :"300px", height: mobile? "auto" : "325px" }}>
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
      <Typography
          sx={{ fontWeight: "bold", fontSize: "1rem" }}
          variant="body2"
          color="primary"
          component="div"
        >
          {areaName}
        </Typography>
        <Typography
          component="div"
          variant="body2"
          sx={{ fontSize: "1.01rem", fontWeight: "600" }}
        >
          {name}
        </Typography>
        <Typography
          variant="subtitle1"
          color="text"
          component="div"
          sx={{ fontWeight: "medium" }}
        >
          {avgRating} ⨀ {sla?.slaString}
        </Typography>
     
      </CardContent>
    </Card>
  );
};

export default VerticalRestoCards;
