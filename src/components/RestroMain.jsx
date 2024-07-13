import React, { useEffect, useState } from "react";
import RestoCards, { withPromotedRestoCards } from "./RestoCards";
import { resData } from "../data/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import NetLost from "./NetLost";
import { API_MAINRESTO, API_MAINRESTO_PLUS_CORS } from "../data/constants";
import styles from "../../styles/RestroCards.module.css";

// console.table(swiggy_api)

const RestroMain = () => {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  const CORS = import.meta.env.VITE_CORS_PROXY;
  const API_MAINRESTO = import.meta.env.VITE_SWIGGY_API_MAIN;

  // console.log(API_MAINRESTO)

  const RestoCardsPromoted = withPromotedRestoCards(RestoCards);

  useEffect(() => {
    fetchData();
    console.log("Main Resto API redenred or Body");
  }, []);

  const fetchData = async () => {
    const data = await fetch(CORS + API_MAINRESTO || API_MAINRESTO);
    const json = await data.json();
    const newData =
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setData(newData);
    setOriginalData(newData);
    setLoading(false);
    console.log(newData);
    console.log(json.data);
  };

  const checkOnline = useOnlineStatus();
  if (!checkOnline) return NetLost();

  return loading ? (
    <Shimmer />
  ) : (
 
    <section className="w-full grid mx-auto">
      <div className="flex justify-center m-[5rem]">
        <div>
          <input
            className="rounded-bl-[.5rem] rounded-l-[.7rem] py-[.4rem] px-[1rem] w-[20rem] ring-1 ring-inset ring-gray-300 outline-none"
            type="text"
            placeholder="search...."
            value={searchText}
            data-testid="searchInput"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="text-[.9rem] py-[.5rem] px-[1rem] bg-gray-100 rounded-br-md rounded-tr-md"
            onClick={() => {
              console.log(data?.info, "test");
              const filteredSearchText =
                data &&
                data.filter((x) =>
                  x?.info?.name
                    ?.toLowerCase()
                    .includes(searchText.toLowerCase())
                );
              setOriginalData(filteredSearchText);
              // setSearchText("")
            }}
          >
            Search Food
          </button>
        </div>
        <button
          className="text-[.8rem] ml-[1rem] h-auto px-[1rem] ring-1 ring-gray-500 rounded-lg text-gray-500"
          onClick={() => {
            const newRating =
              data && data.filter((value) => value?.info?.avgRating >= 4.3);
            setOriginalData(newRating);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="w-auto flex flex-wrap">
        {originalData &&
          originalData.map((restoDB) => (
            <Link key={restoDB.info.id} to={`restaurants/${restoDB.info.id}`}>
              {restoDB.info.isOpen ? (
                <RestoCardsPromoted item={restoDB.info} />
              ) : (
                <RestoCards item={restoDB.info} />
              )}
            </Link>
          ))}
      </div>
    </section>
  );
};

export default RestroMain;
