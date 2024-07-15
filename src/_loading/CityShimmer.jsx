import { Grid, Box, Card } from "@mui/material";
import React from "react";

const CityShimmer = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      sx={{ width: "100%", height: "100%" }}
    >
      <Box
        component="div"
        sx={{
          backgroundColor: "#f5f5f5",
          width: "100%",
          height: "350px",
          marginBottom: 2,
        }}
      />
      <Grid sx={{ display: "flex", justifyContent: "center", gap: "1rem", width: "100%", my: "2.5rem",  }}>
        {Array.from({ length: 13 }).map((_, index) => (
          <Box
            key={index}
            sx={{ backgroundColor: "#f5f5f5", width: "80px", height: "80px", borderRadius: "50%", mt: "2rem" }}
          />
        ))}
      </Grid>
      <Grid sx={{ display: "flex", justifyContent: "center", gap: "1rem", width: "100%", marginBottom: 2,  }}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Box
            key={index}
            sx={{ backgroundColor: "#f5f5f5", width: "240px", height: "240px", borderRadius: "10%", mt: "1.5rem" }}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default CityShimmer;
