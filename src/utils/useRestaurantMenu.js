import React, { useEffect, useState } from "react";
import { RESTOMENU_API } from "../data/constants";

const useRestaurantMenu = (id) => {
  const [resInfo, setResInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(RESTOMENU_API + id);
      const json = await data.json();
      setResInfo(json.data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return { resInfo, loading };
};

export default useRestaurantMenu;
