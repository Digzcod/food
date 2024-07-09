import {configureStore} from "@reduxjs/toolkit"
import cartSlice from "./features/cartSlice";


const foodStore = configureStore({
    reducer: {
        cart: cartSlice
    }
})

export default foodStore;