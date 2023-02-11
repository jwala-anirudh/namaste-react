import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',

  initialState: {
    items: [],
  },

  reducers: {
    // Add an item into the cart
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    // Remove an items from cart
    removeItem: (state, action) => {
      state.items.pop();
    },
    // Clear the items of the cart
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
