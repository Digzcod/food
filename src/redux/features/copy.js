import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    quantity: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
    increaseCartQuantity: (state, action) => {
      const { id } = action.payload;
      const cartItem = state.items.find((item) => item.id === id);
      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        // Initialize quantity properly
        state.items.push({ id, quantity: 1 });
      }
    },
    decreaseCartQuantity: (state, action) => {
      const { id } = action.payload;
      const cartItem = state.items.find((item) => item.id === id);
      if (cartItem) {
        if (cartItem.quantity === 1) {
          // Remove item if quantity is 1
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          cartItem.quantity -= 1;
        }
      }
    },
  },
});

export const { addItem, removeItem, clearCart, increaseCartQuantity, decreaseCartQuantity } = cartSlice.actions;
export default cartSlice.reducer;


// import {createSlice} from "@reduxjs/toolkit"

// const cartSlice = createSlice({
//     name: "cart",
//     initialState: {
//         item: []
//     },
//     reducers: {
//         addItem: (state, action) => {
//             state.item.push(action.payload)
//         },
//         removeItem: (state, action) => {
//             state.item.pop()
//         },
//         clearCart: (state, action) => {
//             state.item.length = 0
//         }
        
//     }
// })

// export const {addItem, removeItem, clearCart} = cartSlice.actions;
// export default cartSlice.reducer 