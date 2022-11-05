import { configureStore } from "@reduxjs/toolkit";
import CheckoutSlice from "./reducers/checkoutSlice";
import UserSlice from "./reducers/userSlice";

const store = configureStore({
  reducer: {
    checkout: CheckoutSlice.reducer,
    user: UserSlice.reducer
  },
  devTools: true,
});

export default store;
