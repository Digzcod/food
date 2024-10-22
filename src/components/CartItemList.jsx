import { imageLinkAddress } from "../data/constants";
import PropTypes from "prop-types";
import FormattedPriceCurrency from "../utils/formattedPrice";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineShop } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getItemQuantity, removeItem } from "../redux/features/cartSlice";
import { useMediaQuery } from "@mui/material";

const CartItemList = ({ data }) => {
  const mobileItemList = useMediaQuery("(max-width: 560px)");
  const dispatch = useDispatch();

  return (
    <>
      {data &&
        data.map((item, index) => {
          const quantity = useSelector((state) =>
            getItemQuantity(state, item.id)
          );
          const totalQuantityPrice =
            quantity * (item?.price / 100 || item?.defaultPrice / 100);
          return (
            <>
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
                    {item?.name}
                  </p>
                  <div className="flex justify-between">
                    <p className="text-sm font-semibold tracking-wider">
                      {item?.price
                        ? FormattedPriceCurrency(item?.price / 100)
                        : FormattedPriceCurrency(item?.defaultPrice / 100)}
                    </p>
                    <span className="">
                      x {quantity}
                    </span>
                    <h1 className=" ">
                      {FormattedPriceCurrency(totalQuantityPrice)}
                    </h1>
                  </div>
                  <p className="text-[.8rem] pt-[1rem] text-gray-500">
                    {item?.description}
                  </p>
                </section>

                <section>
                  <div className="w-[170px] h-[100px] rounded-lg object-cover overflow-hidden shadow-xl border">
                    <img
                      className="w-full object-cover"
                      src={imageLinkAddress + item?.imageId}
                      alt={item?.name}
                    />
                  </div>
                  <button
                    className=" font-[600] text-[.8rem] text-green-500 border flex items-center shadow-2xl py-1 px-[1.5rem] bg-slate-100 rounded-md relative right-4 top-[-1rem] left-10 tracking-wide uppercase"
                    onClick={() => {
                      if (item.id) {
                        dispatch(addItem(item?.id));
                      }
                    }}
                  >
                    add <BsCartPlus className="ml-2" />
                  </button>
                  <button
                    className=" font-[600] text-[.8rem] text-green-500 border flex items-center shadow-2xl py-1 px-[1.5rem] bg-slate-100 rounded-md relative right-4 top-[-1rem] left-10 tracking-wide uppercase"
                    onClick={() => {
                      if (item) {
                        dispatch(removeItem(item?.id));
                      }
                    }}
                  >
                    minus <BsCartPlus className="ml-2" />
                  </button>
              
                  <p className="text-[.8rem] pt-[1rem] text-gray-500 text-center mt-[-1.7rem]">
                    customizable
                  </p>
                </section>
              </div>
            </>
          );
        })}
      <div className="mt-4 p-4 border-t border-gray-200 text-lg">
        {data.length >= 1 && (
          <p className="text-sm font-semibold text-end">
            Total Cart Value:{" "}
            {FormattedPriceCurrency(
              data.reduce(
                (total, item) => total + (item?.price * item.quantity) / 100,
                0
              )
            )}
          </p>
        )}
      </div>
    </>
  );
};

CartItemList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default CartItemList;
