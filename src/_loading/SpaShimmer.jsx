import { BsFillStarFill, BsFillRecordCircleFill, BsCoin } from "react-icons/bs";

import { Box, useMediaQuery } from "@mui/material";
import useRestaurantMenu from "../hooks/useRestaurantMenu";

const SpaShimmer = () => {
  const {} = useRestaurantMenu();
  const tabletMenu = useMediaQuery("(max-width:1200px)");
  const mobileMenu = useMediaQuery("(max-width:850px)");
  const nameRating = useMediaQuery("(max-width:610px)");
  const mobileTagMenu = useMediaQuery("(max-width:609px)");

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "grid",
          mx: "auto",
          justifyContent: "center",
          mt: "2rem",
        }}
      >
        <article
          className={
            (mobileMenu && "w-[95vw]") || tabletMenu ? "w-[80vw]" : "w-[50vw]"
          }
        >
          <div
            className={
              nameRating
                ? "block pb-[1rem] border-b-2 border-b-slate-50 border mb-2"
                : "flex justify-between pt-[3rem] pb-[1rem] border-b-2 border-b-slate-50 border-spacing-2 mb-2"
            }
          >
            <section>
              <h4></h4>
              <h1 className="bg-slate-50 w-[15rem] h-[2rem] mb-2"/>
              <h1 className="bg-slate-50 w-[10rem] h-[2rem]"/>
              <ul className="text-[.8rem] text-gray-500 font-light">

              </ul>
            </section>

            <p className="bg-slate-50 w-[8rem] h-[5rem]"/>
    
          </div>

          <section className="flex items-center gap-2 text-sm font-bold">
            <p className="bg-slate-50 w-[10rem] h-[2rem]" />
            <p className=" bg-slate-50 w-[2rem] h-[2rem] " />

          </section>
          <section className="flex flex-wrap gap-2 my-[1rem] border-b-8 border-slate-100 pb-[2rem]">
            {Array.from({ length: 7 }).map((_, index) => (
              <div
                key={index}
                className={
                  mobileTagMenu
                    ? "w-full text-center border border-gray-200 py-1 px-2 rounded-md cursor-pointer uppercase bg-slate-50 h-[3rem]"
                    : "w-[15rem] text-center border border-gray-200 py-1 px-2 rounded-md cursor-pointer uppercase bg-slate-50 h-[3rem]"
                }
              ></div>
            ))}
          </section>

          <section className="space-y-[.6rem] rounded-md">
            {Array.from({ length: 10 }).map((_, index) => (
              <div key={index} className="bg-slate-50 w-[50vw] h-[4rem]"/>
            ))}
          </section>
        </article>
      </Box>
    </>
  );
};

export default SpaShimmer;
