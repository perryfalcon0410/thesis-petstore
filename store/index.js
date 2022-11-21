import { configureStore } from '@reduxjs/toolkit'
import CheckoutSlice from './reducers/checkoutSlice'
import ProductSlice from './reducers/productSlice'
import UserSlice from './reducers/userSlice'

const store = configureStore({
  reducer: {
    checkout: CheckoutSlice.reducer,
    user: UserSlice.reducer,
    product: ProductSlice.reducer,
  },
  devTools: true,
})

export default store
