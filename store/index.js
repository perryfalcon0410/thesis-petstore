import { configureStore } from "@reduxjs/toolkit";
import CheckoutSlice from "./reducers/checkoutSlice";

const store = configureStore({
  reducer: {
    checkout: CheckoutSlice.reducer,
  },
  devTools: true,
});

export default store;
