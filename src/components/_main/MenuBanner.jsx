import React from "react";
import { Box, Grid, IconButton } from "@mui/material";
import { imageLinkAddress } from "../../data/constants";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import useSmallMenu from "../../hooks/useSmallMenu";

const MenuBanner = () => {
  const {containerRef, data, handlePrevClick, handleNextClick} = useSmallMenu()

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
          <IconButton  onClick={handlePrevClick}>
            {/* <ArrowBackIos /> */}
            <ArrowBackRoundedIcon sx={{fontSize: "2rem"}}/>
          </IconButton>
          <IconButton onClick={handleNextClick}>
            {/* <ArrowForwardIos /> */}
            <ArrowForwardRoundedIcon sx={{fontSize: "2rem"}}/>
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
 