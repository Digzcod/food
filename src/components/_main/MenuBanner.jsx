import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Box, Grid } from "@mui/material";
import { API_MAINRESTO, cors, imageLinkAddress } from "../../data/constants";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const MenuBanner = () => {
  const [data, setData] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  async function getImageData() {
    const res = await fetch(cors + API_MAINRESTO);
    const db = await res.json();
    const newData = db?.data?.cards[0]?.card?.card?.imageGridCards?.info;
    setData(newData);
    localStorage.setItem("cacheImageData", JSON.stringify(newData));
  }
  // console.log(data)


  useEffect(() => {
    const cachedData = localStorage.getItem("cacheImageData");
    if (cachedData) {
      setData(JSON.parse(cachedData));
      console.log("cache data call");
    } else {
      getImageData();
      console.log("calling image data");
    }
  }, []);

  const updateImageIndex = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % data.length);
  }, [data.length]);

  useEffect(() => {
    const interval = setInterval(updateImageIndex, 8000);
    console.log("check: render interval current");
    return () => clearInterval(interval);
  }, [data, updateImageIndex]);

  const currentImage = useMemo(() => {
    return data.length > 0 ? data[currentImageIndex] : null;
  }, [data, currentImageIndex]);

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{
        width: "100%",
        bgcolor: "primary.main",
        py: "3rem",
      }}
    >
      <Box
        className="w-[300px] h-[300px] object-cover object-center overflow-hidden rounded-lg mx-auto relative"
      >
        <TransitionGroup>
          {currentImage && (
            <CSSTransition
              key={currentImage.id}
              classNames="carousel"
              timeout={1000} // Transition duration
            >
              <Box
                component="img"
                src={imageLinkAddress + currentImage.imageId}
                alt={`Image ${currentImageIndex}`}
                className="absolute top-0 left-0 w-full h-full object-cover object-center transition-opacity duration-1000 transform"
              />
            </CSSTransition>
          )}
        </TransitionGroup>
      </Box>
    </Grid>
  );
};

export default MenuBanner;
