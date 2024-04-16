import {configureStore} from "@reduxjs/toolkit"
import cartSlice from "../../../food-js/src/redux/features/createSlice";


const foodStore = configureStore({
    reducer: {
        cart: cartSlice
    }
})

export default foodStore;