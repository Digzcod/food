import React, { useEffect, useRef, useState } from "react";
import { API_MAINRESTO, cors, imageLinkAddress } from "../data/constants";

const useSmallMenu = () => {
  const [data, setData] = useState([]);
  const containerRef = useRef(null);

  async function getImageData() {
    const res = await fetch(cors + API_MAINRESTO);
    const db = await res.json();
    const newData = db?.data?.cards[0]?.card?.card?.imageGridCards?.info;
    setData(newData);
    localStorage.setItem("cacheImageData", JSON.stringify(newData));
  }

  useEffect(() => {
    const cachedData = localStorage.getItem("cacheImageData")
    if(cachedData) {
      setData(JSON.parse(cachedData))
    } else {
      getImageData()
    }
  }, []);


  function handlePrevClick(){
    if(containerRef.current) {
      containerRef.current.scrollBy({
        left: -600,
        behavior: "smooth"
      });
    }
  };
  function handleNextClick(){
    if(containerRef.current) {
      containerRef.current.scrollBy({
        left: 600,
        behavior: "smooth"
      });
    }
  };

  return { containerRef, data, handlePrevClick, handleNextClick };
};

export default useSmallMenu;
