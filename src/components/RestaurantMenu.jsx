import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RESTOMENU_API } from "../data/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import {
  BsFillStarFill,
  BsFillRecordCircleFill,
  BsFillDoorClosedFill,
  BsCoin,
} from "react-icons/bs";
import RestaurantCategory from "./RestaurantCategory";
import UserContext from "../hooks/userContext";
import FormattedPriceCurrency from "../utils/formattedPrice";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo, loading } = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState({});

  const { loggedInUser } = useContext(UserContext);

  if (loading) return <Shimmer />;
  const restaurantInfo = resInfo?.cards[2]?.card?.card?.info;
  if (!restaurantInfo) return <h1>No Data Available</h1>;

  const {
    name,
    cuisines,
    areaName,
    sla,
    avgRatingString,
    totalRatingsString,
    costForTwo,
    isOpen,
  } = restaurantInfo;
  console.log(restaurantInfo, "DEBUG API DUE undifined ")
  
  const discountInfoFiltered =
  resInfo?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers;
  
  const itemsCategoryFiltered =
  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
    (f) =>
      f.card?.card?.["@type"] ===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0]?.card?.card)
  
  const handleToggle = (index) => {
    setShowIndex(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
    <section className="w-full grid justify-center px-2 items-baseline">
      <article className="w-[50vw]">
        <div className="flex justify-between  pt-[3rem] pb-[1rem] border-b-2 border-b-gray-400 border-dotted mb-2">
          <section>
            <h4>{loggedInUser}</h4>
            <h1 className="text-[1.2rem] text-gray-700 font-semibold">
              {name}
            </h1>
            <ul className="text-[.8rem] text-gray-500 font-light">
              <li>{cuisines.join(", ")}</li>
              <li className="mt-[-3px]">
                {areaName},{sla.lastMileTravelString}
              </li>
            </ul>
          </section>

          <section className="py-[1rem] px-2 text-center block rounded-md w-[1/3] border">
            <p className="text-sm text-orange-500 font-bold text-center inline-flex mx-[auto] justify-items-center">
              <BsFillStarFill className="mt-[.2rem] mr-[.3rem]" />
              {avgRatingString}
            </p>
            <div className="w-auto h-[.01rem] bg-gray-500 my-[.4rem]"></div>
            <p className="text-[11px] font-bold text-gray-400">
              {" "}
              {totalRatingsString}
            </p>
          </section>
        </div>

        <section className="flex items-center gap-2 text-sm font-bold">
          {isOpen ? (
            <p className="flex items-center text-gray-500">
              <BsFillRecordCircleFill className="mr-1 text-green-400" />
              Open for order
            </p>
          ) : (
            <p className="flex items-center text-red-400">
              <BsFillRecordCircleFill className="mr-1 text-red-400" />
              Closed
            </p>
          )}
          <p className="flex items-center ml-4  text-gray-600 ">
            <BsCoin className="mr-1" />{" "}
            {FormattedPriceCurrency(costForTwo / 100)}
          </p>
          <p></p>
        </section>
        <section className="flex flex-wrap gap-2 my-[1rem] border-b-8 border-green-200 pb-[2rem]">
          {discountInfoFiltered.map((d, index) => (
            <div
              key={index}
              className=" w-[15rem] text-center border border-gray-200 py-1 px-2 rounded-md cursor-pointer uppercase"
            >
              <p className="text-gray-600 text-[13px] font-black">
                {d?.info?.header}{" "}
              </p>
              <p className=" text-gray-400 text-[11px] font-bold">
                {d?.info?.description}
              </p>
              <p className=" text-gray-400 text-[11px] font-bold">
                {d?.info?.couponCode}
              </p>
            </div>
          ))}
        </section>

        <section>
          {itemsCategoryFiltered.map((item, index) => (
            <RestaurantCategory
              key={item?.card?.card?.title}
              item={item?.card?.card}
              showItems={showIndex[index]}
              setShowIndex={() => handleToggle(index)}
            />
          ))}
        </section>
      </article>
    </section>
  );
};

export default RestaurantMenu;
