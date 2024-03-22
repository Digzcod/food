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
import UserContext from "../../../namaste-react/src/utils/UserContext";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  // const [showIndex, setShowIndex] = useState(null);
  // const [showId, setShowId] = useState(1)

  // const {loggedInUser} = useContext(UserContext)

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    areaName,
    sla,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
    isOpen,
  } = resInfo?.cards[0]?.card?.card?.info;
  console.log(name, isOpen);
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const discountInfoFiltered =
    resInfo?.cards[0]?.card?.card?.info?.aggregatedDiscountInfoV2?.descriptionList.filter(
      (d) => d.operationType === "RESTAURANT"
    );
  // console.log(discountInfoFiltered);

  const filteredItemCategories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (i) =>
        i.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(filteredItemCategories);
  // console.log(filteredItemCategories[0]?.card?.card?.itemCards);

  return (
    <section className="w-full grid justify-center px-2 items-baseline">
      <div className="w-[50vw]">
        <div className="flex justify-between  pt-[3rem] pb-[1rem] border-b-2 border-b-gray-400 border-dotted mb-2">
          <section>
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
              {/* <BsFillDoorClosedFill className="mr-1 text-red-600" />Closed */}
            </p>
          )}
          <p className="flex items-center ml-4  text-gray-600 ">
            <BsCoin className="mr-1" /> {costForTwoMessage}
          </p>
          <p></p>
        </section>
        {isOpen ? (
          <p className="tracking-widest text-[15px] text-gray-700 py-[.8rem] px-2 rounded-md mt-2 font-medium bg-green-50 border border-green-500">
            We are open! Please add your favorite menu🙂
          </p>
        ) : (
          <p className="text-gray-700 text-[15px] py-[.8rem] px-2 rounded-md mt font-medium bg-red-50 border border-red-500">
            It's closed at this time. Will be right back😉
          </p>
        )}

        <section className="flex flex-wrap gap-4 my-[1rem] ">
          {discountInfoFiltered.map((d) => (
            <div
              key={d.meta}
              className=" w-[15rem] text-center border border-gray-200 py-1 px-2 rounded-md cursor-pointer uppercase"
            >
              <p className="text-gray-600 text-[13px] font-black">
                {d.discountType}{" "}
              </p>
              <p className=" text-gray-400 text-[11px] font-bold">{d.meta}</p>
            </div>
          ))}
        </section>

        <section>
          {filteredItemCategories.map((item, index) => (
            <RestaurantCategory
              key={item?.card?.card?.title}
              item={item?.card?.card}
              // showItems={showIndex === index ? true : false}
              // setShowIndex={() => setShowIndex(index)}
            />
          ))}
        </section>
      </div>
    </section>
  );
};

export default RestaurantMenu;

// this  codes was replace custom hooks name useRestauranMenu
// useEffect(() => {
//   fetchMenuRestro();
// }, []);

// const fetchMenuRestro = async () => {
//   const data = await fetch(RESTOMENU_API + resId);
//   const json = await data.json();
//   setResInfo(json.data);
// };
