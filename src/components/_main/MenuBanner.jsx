import React, { useState, useEffect, useRef } from "react";
import { Box, Grid, IconButton } from "@mui/material";
import { API_MAINRESTO, cors, imageLinkAddress } from "../../data/constants";
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const MenuBanner = () => {
  const [data, setData] = useState([]);
  const containerRef = useRef(null);

  async function getImageData() {
    const res = await fetch(cors + API_MAINRESTO);
    const db = await res.json();
    const newData = db?.data?.cards[0]?.card?.card?.imageGridCards?.info;
    setData(newData);
    console.log(newData);
    localStorage.setItem("cacheImageData", JSON.stringify(newData));
  }

  useEffect(() => {
    const cachedData = localStorage.getItem("cacheImageData");
    if (cachedData) {
      setData(JSON.parse(cachedData));
    } else {
      getImageData();
    }
  }, []);

  const handlePrevClick = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -600, // Adjust the value to control the scroll amount
        behavior: 'smooth'
      });
    }
  };

  const handleNextClick = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 600, // Adjust the value to control the scroll amount
        behavior: 'smooth'
      });
    }
  };

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{
        width: "100%",
        mt: "2rem",
        py: "3rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "70%",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
            position: "absolute",
            top: -40,
            right: 0,
          }}
        >
          <IconButton onClick={handlePrevClick}>
            <ArrowBackIos />
          </IconButton>
          <IconButton onClick={handleNextClick}>
            <ArrowForwardIos />
          </IconButton>
        </Box>
        <Box
          ref={containerRef}
          sx={{
            display: "flex",
            alignItems: "center",
            overflowX: "scroll",
            width: "100%",
            scrollbarWidth: "none",
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          {data.map((image) => (
            <Box
              key={image.id}
              component="img"
              src={imageLinkAddress + image.imageId}
              alt={`Image`}
              sx={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                margin: "0 10px",
                transition: "opacity 0.5s ease-in-out",
              }}
            />
          ))}
        </Box>
      </Box>
    </Grid>
  );
};

export default MenuBanner;
 