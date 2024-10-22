import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // or 'next/router' if you're using Next.js
import { Box, Grid, TextField, Button, List, ListItem } from "@mui/material";
import { cityCoordinates } from "../../data/nameCity"; // Adjust the path
import pizzaPic from "../../assets/_img/vibrant_city_food_delivery.jpeg"
import { FaMapMarker } from "react-icons/fa";


// console.log(cityCoordinates)

const RiderCity = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1); // For tracking the active suggestion
  const navigate = useNavigate(); // Assuming you're using React Router for navigation

  const handleSearchChange = (e) => {
    const input = e.target.value;
    setSearchQuery(input);
    if (input.length > 0) {
      const filtered = Object.keys(cityCoordinates).filter(city =>
        city.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredCities(filtered);
      setShowSuggestions(true);
      setActiveIndex(-1); // Reset active index when the input changes
    } else {
      setFilteredCities([]);
      setShowSuggestions(false);
    }
  };

  const handleCitySelection = (city) => {
    setSearchQuery(city);
    setShowSuggestions(false);
    navigate(`/city/${city}`); // Adjust URL format as per your setup
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      // Move down the suggestions list
      if (activeIndex < filteredCities.length - 1) {
        setActiveIndex(prevIndex => prevIndex + 1);
      }
    } else if (e.key === 'ArrowUp') {
      // Move up the suggestions list
      if (activeIndex > 0) {
        setActiveIndex(prevIndex => prevIndex - 1);
      }
    } else if (e.key === 'Enter') {
      // Select the active city
      if (activeIndex >= 0 && filteredCities[activeIndex]) {
        handleCitySelection(filteredCities[activeIndex]);
      }
    }
  };



  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{
        width: "100%",
        height: { xs: "300px", sm: "400px", md: "600px" },
        backgroundImage: `url(${pizzaPic})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    > 
      <Box
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: { xs: "20px", sm: "25px", md: "30px" },
          borderRadius: "12px",
          boxShadow: "0 6px 15px rgba(0, 0, 0, 0.15)",
          textAlign: "center",
          width: { xs: "90%", sm: "70%", md: "50%" },
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        <h2 className="text-2xl"
          style={{
            marginBottom: "15px",
            fontWeight: "600",
            color: "#333",
            fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2.5rem" },
          }}
        >
          Search Foods Near at Indian Cities
        </h2>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Search for food near your city"
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
            sx={{
              width: { xs: "100%", sm: "70%" },
              backgroundColor: "white",
              borderRadius: "8px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
              },
            }}
          />
          <Button
            variant="contained"
            color="primary"
            sx={{
              width: { xs: "100%", sm: "30%" },
              backgroundColor: "#ff7043",
              padding: { xs: "8px 0", md: "10px 0" },
              fontWeight: "600",
              textTransform: "none",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#ff5722",
              },
            }}
            onClick={() =>
              filteredCities.length > 0 &&
              handleCitySelection(filteredCities[0])
            }
          >
            Search
          </Button>
        </Box>

        {/* City Suggestions Dropdown */}
        {showSuggestions && filteredCities.length > 0 && (
          <List
            sx={{
              position: "absolute",
              backgroundColor: "white",
              width: { xs: "80%", sm: "60%", md: "40%", lg: "33%" }, // Adjust width for different screen sizes
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              zIndex: 10,
              maxHeight: "450px",
              overflowY: "auto",
              marginTop: "2rem",
              left: { xs: "10%", sm: "20%", md: "30%", lg: "33.4%" }, // Adjust left position for centering the list
              right: "auto", // Ensure it's aligned properly
            }}
          >
            {filteredCities.map((city, index) => (
              <ListItem
                key={index}
                sx={{
                  cursor: "pointer",
                  padding: "10px",
                  backgroundColor: activeIndex === index ? '#e0e0e0' : 'white', // Highlight active city
                  "&:hover": {
                    backgroundColor: "#f0f0f0",
                  },
                }}
                onClick={() => handleCitySelection(city)}
              >
                <FaMapMarker className="ml-[.5rem] mr-1 text-gray-400"/> {city.charAt(0).toUpperCase() + city.slice(1)}
              </ListItem>
            ))}
          </List>
        )}
      </Box>
    </Grid>
  );
};

export default RiderCity;
