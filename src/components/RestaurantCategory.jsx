import { useState } from "react";
import ItemListCategory from "./ItemListCategory";
import { BsChevronDoubleDown, BsChevronDoubleUp  } from "react-icons/bs";


const RestaurantCategory = ({item, showItems, setShowIndex }) => {
    const [showCategory, setShowCategory] = useState(false)
    // function handleClick() {
    //     setShowIndex(prevState => !prevState)
    // }

    console.log(item)
    return (
        <section className="border-gray-50 border-b-[.8rem]">
            <div onClick={()=> setShowCategory(!showCategory)} className="w-auto bg-gray-50 shadow-md p-4 flex justify-between border">
                <span className="font-semibold">{item.title} ({item.itemCards.length})</span>
                <span >{showCategory ? <BsChevronDoubleUp/> : <BsChevronDoubleDown/>}</span>
            </div>
            {showCategory && <ItemListCategory data={item.itemCards}/>}
        </section>
    )
} 
export default RestaurantCategory;
