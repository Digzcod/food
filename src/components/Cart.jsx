import { clearCart } from "../redux/features/createSlice";
import ItemListCategory from "./ItemListCategory";
import { useSelector, useDispatch } from "react-redux";
const Cart = () => {
  const cartItem = useSelector((store) => store.cart.item);
  // console.log(cartItem);

  const dispatch = useDispatch()

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <section className="w-1/2 grid justify-center m-auto py-[1rem]">
      <h2 className="text-2xl font-bold text-center py-3">Cart</h2>
      <div className="mx-auto">
        <button 
        className="bg-orange-500 border-none py-1 px-4 rounded-md text-white"
        onClick={handleClearCart}
        >
          clear cart
        </button>
      </div>
        <div>
          {cartItem.length === 0 && <h2>Cart is empty. Please add some item!</h2>}
          <ItemListCategory data={cartItem}/>
        </div>
    </section>
  );
};

export default Cart;
