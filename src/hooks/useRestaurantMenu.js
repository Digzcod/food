import  { useEffect, useState } from "react";

const useRestaurantMenu = (id) => {
  const [resInfo, setResInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  const CORS = import.meta.env.VITE_CORS_PROXY;
  const SWIGGY_CATEGORY = import.meta.env.VITE_SWIGGYAPI_WITH_CATEGORY

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true)
    try {
      const data = await fetch(CORS + SWIGGY_CATEGORY + id);
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
