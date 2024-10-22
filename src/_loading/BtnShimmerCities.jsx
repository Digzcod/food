import { Button, Grid } from "@mui/material";

const BtnShimmerCities = () => {



  return  (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      sx={{ pb: "3rem", px: 1 }}
    >
      {Array.from({length: 28}).map((city, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Button
            // variant="outlined"
            color="inherit"
            sx={{ height: "3.3rem", py: ".6rem", textTransform: "capitalize", fontWeight: 550, backgroundColor: "#eeef" }}
            fullWidth
          >
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default BtnShimmerCities;
