import { createSelector, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      if (!item || !item.id) return; // Ensure payload has id

      const existingItem = state.items.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 0) + 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
        const id = action.payload;
        if (!id) return; // Ensure payload has id
  
        const index = state.items.findIndex((item) => item.id === id);
        if (index === -1) return; // Item not found
  
        if (state.items[index].quantity > 1) {
          state.items[index].quantity -= 1;
        } else {
          state.items.splice(index, 1); // Remove item if quantity is 1 or less
        }
      },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

// Selectors
const selectItem = (state) => state.cart.items;

export const getItemQuantity = createSelector(
  [selectItem, (state, itemId) => itemId],
  (items, itemId) => {
    const item = items.find((item) => item.id === itemId);
    return item ? item.quantity : 0;
  }
);

// export const getTotalQuantity = createSelector([selectItem], (items) => {
//   return items.reduce((total, item) => total + item.quantity, 0);
// });

export const getTotalPrice = createSelector(
    [selectItem],
    (items) => {
      return items.reduce((total, item) => {
        return total + (item.price * item.quantity);
      }, 0);
    }
  );

export const {
  addItem,
  removeItem,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

    // increaseQuantity: (state, action) => {
    //   const id = action.payload.id;
    //   if (!id) return; // Ensure payload has id

    //   const item = state.items.find((i) => i.id === id);
    //   if (item) {
    //     item.quantity = (item.quantity || 0) + 1;
    //   }
    // },
    // decreaseQuantity: (state, action) => {
    //   const id = action.payload.id;
    //   if (!id) return; // Ensure payload has id

    //   const item = state.items.find((i) => i.id === id);
    //   if (item) {
    //     if (item.quantity > 1) {
    //       item.quantity -= 1;
    //     } else {
    //       state.items = state.items.filter((i) => i.id !== id);
    //     }
    //   }
    // },