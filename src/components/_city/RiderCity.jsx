import React from 'react'
import riderPic from "../../assets/_img/rider.png"
import placePic from "../../assets/_img/place.jpg"
import { Box, Grid } from '@mui/material'




const RiderCity = () => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{
        width: "100%",
        height: "400px",
        // py: "3rem",
        backgroundImage: `url(${placePic})`, // Set the background image
        backgroundSize: 'cover', // Cover the entire grid area
        backgroundPosition: 'center', // Center the image
        backgroundRepeat: 'no-repeat', // Do not repeat the image
        // borderBottomRightRadius:"30px",
        // borderBottomLeftRadius:"30px"

      }}
    >
    
      <img src={riderPic} alt="Rider" className='w-[250px] absolute top-[15rem]' />
    </Grid>
  )
}

export default RiderCity;