import { imageLinkAddress } from "../data/constants";
import PropTypes from "prop-types";
import FormattedPriceCurrency from "../utils/formattedPrice";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineShop } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/features/cartSlice";
import { useMediaQuery } from "@mui/material";

const ItemListCategory = ({ data }) => {
  console.log(data);
  const mobileItemList = useMediaQuery("(max-width: 560px)");

  const dispatch = useDispatch();

  return (
    <>
      {data &&
        data.map((item, index) => (
          <div
            data-testid="foodItems"
            key={item?.card?.info?.id || index}
            className={
              mobileItemList
                ? "flex flex-col-reverse justify-between items-center  mt-5 mb-3 py-3 px-2 border-b-2 content-center bg-gray-50"
                : "flex justify-between  mt-5 mb-3 py-3 px-2 border-b-2 content-center bg-gray-50"
            }
          >
            <section className="mr-[2rem]">
              <p>
                <AiOutlineShop className="text-green-500" />
              </p>
              <p className="text-md font-semibold text-gray-600">
                {item?.card?.info?.name}
              </p>
              <p className="text-sm font-semibold tracking-wider">
                {item?.card?.info?.price
                  ? FormattedPriceCurrency(item?.card?.info?.price / 100)
                  : FormattedPriceCurrency(
                      item?.card?.info?.defaultPrice / 100
                    )}
              </p>
              <p className="text-[.8rem] pt-[1rem] text-gray-500">
                {item?.card?.info?.description}
              </p>
            </section>

            <section>
              <div className="w-[170px] h-[100px] rounded-lg object-cover overflow-hidden shadow-xl border">
                <img
                  className="w-full object-cover"
                  src={imageLinkAddress + item?.card?.info?.imageId}
                  alt={item?.card?.info?.name}
                />
              </div>
              <button
                className=" font-[600] text-[.8rem] text-green-500 border flex items-center shadow-2xl py-1 px-[1.5rem] bg-slate-100 rounded-md relative right-4 top-[-1rem] left-10 tracking-wide uppercase"
                onClick={() => {
                  if(item?.card?.info.id) {
                    dispatch(addItem(item?.card?.info))
                  }
                
                }}
                
              >
                add <BsCartPlus className="ml-2" />
              </button>
              {/* <div className="relative right-4 top-[-1rem] left-5">
            </div> */}
              <p className="text-[.8rem] pt-[1rem] text-gray-500 text-center mt-[-1.7rem]">
                customizable
              </p>
            </section>
          </div>
        ))}
    </>
  );
};

ItemListCategory.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ItemListCategory;
