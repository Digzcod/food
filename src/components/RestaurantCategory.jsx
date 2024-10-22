import { useState } from "react";
import ItemListCategory from "./ItemListCategory";
import { BsChevronDoubleDown, BsChevronDoubleUp  } from "react-icons/bs";
import { Box } from "@mui/material";



const RestaurantCategory = ({item, showItems, setShowIndex }) => {
    // const [showCategory, setShowCategory] = useState(false)
    function handleClick() {
        setShowIndex(prevState => !prevState)
    }

    
    // console.log("Recived item props", item)
    return (
        <Box className="w-full border-gray-50 border-b-[.8rem]">
            
            <div onClick={handleClick} className="w-auto bg-gray-50 shadow-md p-4 flex justify-between border">
                <span className="font-semibold">{item?.title} ({item?.itemCards ? item.itemCards.length : 0})</span>
                <span >{showItems ? <BsChevronDoubleUp/> : <BsChevronDoubleDown/>}</span>
            </div>
            {showItems && <ItemListCategory data={item?.itemCards}/>}
        </Box>
    )
} 
export default RestaurantCategory;
