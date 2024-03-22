import React, { useEffect, useState } from 'react'
import { RESTOMENU_API } from "../data/constants";

const useRestaurantMenu = (id) => {
   const [resInfo, setResInfo] = useState(null)

   useEffect(() => {
    fetchData()
   }, [])

   const fetchData = async() => {
    const data = await fetch(RESTOMENU_API+id)
    const json = await data.json()
    setResInfo(json.data)
   }
   return resInfo
} 

export default useRestaurantMenu;