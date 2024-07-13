import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { API_MAINRESTO, cors } from "../../data/constants";
import { useNavigate } from "react-router-dom";
import Shimmer from "../Shimmer";

const BtnContainer = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [displayData, setDisplayData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(24);
  const navigate = useNavigate();

  const getCity = async () => {
    setLoad(true);
    try {
      const res = await fetch(cors + API_MAINRESTO);
      const data = await res.json();
      const newData = data?.data?.cards[10]?.card?.card?.cities || [];
      console.log(newData);
      setData(newData);
      setDisplayData(newData.slice(0, 19));
      setLoad(false);
    } catch (error) {
      throw new Error("failed data fetch about cities");
    }
  };

  const loadMore = () => {
    const nextIndex = currentIndex + 20;
    setDisplayData(data.slice(0, nextIndex - 1));
    setCurrentIndex(nextIndex);
  };

  useEffect(() => {
    console.log("API CAll");
    getCity();
  }, []);

  const handleNavigateCity = (cityName) => {
    navigate(`/city/${cityName.trim().replace(/\s+/g, "-")}`)
  }

  return load ? (
    <Shimmer />
  ) : (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      sx={{ pb: "3rem", px: 1 }}
    >
      {displayData.map((city, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Button
            variant="outlined"
            color="inherit"
            sx={{ py: ".6rem", textTransform: "capitalize", fontWeight: 550 }}
            fullWidth
            onClick={() => handleNavigateCity(city?.text.toLowerCase())}
          >
            {city?.text}
          </Button>
        </Grid>
      ))}
      {currentIndex - 19 < data.length && (
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Button
            variant="outlined"
            color="primary"
            sx={{ py: ".6rem", textTransform: "capitalize", fontWeight: 550 }}
            fullWidth
            onClick={loadMore}
          >
            Show More
          </Button>
        </Grid>
      )}
    </Grid>
  );
};

export default BtnContainer;
