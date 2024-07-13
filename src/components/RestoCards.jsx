import React, { useState } from "react";
import styles from "../../styles/RestroCards.module.css";
import { imageLinkAddress } from "../data/constants";
import { Button } from "@mui/material";

// console.log(resData);
const RestoCards = ({ item }) => {
  const { cloudinaryImageId, name, avgRating, sla, cuisines, areaName, id } =
    item || {};
  console.log(item);
  return (
    <div data-testid="resCard" className={styles.resto_cards}>
      <div className={styles.resto_image}>
        <img src={imageLinkAddress + cloudinaryImageId} alt="" />
      </div>
      <div className={styles.resto_info}>
        <h1>{name}</h1>
        <section>
          <p>{avgRating} ⨀</p>
          <p>{sla?.slaString}</p>
        </section>
        <div>
          <p>{cuisines?.join(", ")}</p>
          <p style={{ color: "blue" }}>{areaName}</p>
        </div>
        <Button size="small"  variant="text" color="inherit">
          Test
        </Button>
      </div>
    </div>
  );
};

export const withPromotedRestoCards = (ResToCards) => {
  return (props) => {
    return (
      <section>
        <div className="relative">
          <label
            htmlFor=""
            className="absolute bg-green-500 py-1 px-[1rem] left-8 text-slate-50 text-sm tracking-widest shadow-md"
          >
            Order Now
          </label>
        </div>
        <ResToCards {...props} />
      </section>
    );
  };
};

export default RestoCards;
