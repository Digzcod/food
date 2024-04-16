import { useState } from "react";
import ItemListCategory from "./ItemListCategory";
import { BsChevronDoubleDown, BsChevronDoubleUp  } from "react-icons/bs";


const RestaurantCategory = ({item, showItems, setShowIndex }) => {
    // const [showCategory, setShowCategory] = useState(false)
    function handleClick() {
        setShowIndex(prevState => !prevState)
    }

    console.log(item)
    return (
        <section className="border-gray-50 border-b-[.8rem]">
            <div onClick={handleClick} className="w-auto bg-gray-50 shadow-md p-4 flex justify-between border">
                <span className="font-semibold">{item?.title} ({item?.itemCards.length})</span>
                <span >{showItems ? <BsChevronDoubleUp/> : <BsChevronDoubleDown/>}</span>
            </div>
            {showItems && <ItemListCategory data={item?.itemCards}/>}
        </section>
    )
} 
export default RestaurantCategory;
