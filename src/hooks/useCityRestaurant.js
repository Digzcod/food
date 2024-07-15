import React, { useEffect, useRef, useState } from 'react'
import { cityCoordinates } from '../data/nameCity';
import { useParams } from 'react-router-dom';
import { cors } from '../data/constants';

const useCityRestaurant = () => {
    const [load, setLoad] = useState(false);
    const [cityRestaurants, setCityRestaurants] = useState([]);
    const [place, setPLace] = useState([]);
    const { cityName } = useParams();
    const scrollRef = useRef(null);
 

    const getCityRestro = async (lat, lng) => {
      setLoad(true);
      try {
        const res = await fetch(
          `${cors}https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&page_type=DESKTOP_WEB_LISTING`
        );
        const data = await res.json();
        console.log(data);
        const newData =
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
        // console.log;
        setCityRestaurants(newData);
        setPLace(data?.data?.cards[11]?.card?.card);
        setLoad(false);
      } catch (error) {
        throw new Error("Failed to fetch data at City Restro");
      }
    };
  
    useEffect(() => {
      const coordinates = cityCoordinates[cityName];
      if (coordinates) {
        getCityRestro(coordinates.lat, coordinates?.lng);
      } else {
        setLoad(false);
        throw new Error("no city restro found");
      }
    }, [cityName]);
  
    const handleScroll = (direction) => {
      const scrollAmount = direction === "left" ? -1000 : 1000;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    };
  
    return {load, cityRestaurants, place, scrollRef, handleScroll, }
}

export default useCityRestaurant