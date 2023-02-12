import { configureStore } from '@reduxjs/toolkit';

// Store Slices
import cartSlice from './cartSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;
