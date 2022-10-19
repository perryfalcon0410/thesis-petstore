import { createSlice } from '@reduxjs/toolkit'
import { cartDetail } from 'components/mocks/cartDetail'

const initialState = {
  cart: cartDetail,
  billingInfo: {
    billing_first_name: '',
    billing_last_name: '',
    billing_company: '',
    billing_country: 'VN',
    billing_address_1: '',
    billing_postcode: '',
    billing_city: '',
    billing_phone: '',
    billing_email: '',
    account_username: '',
    account_password: '',
    shipping_first_name: '',
    shipping_last_name: '',
    shipping_company: '',
    shipping_country: 'VN',
    shipping_address_1: '',
    shipping_postcode: '',
    shipping_city: '',
    order_comments: '',
    payment_method: 'bacs',
  },
  totalPrice: 0,
}

const CheckoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    resetCheckout: (state) => {
      state = initialState
    },
    addItemById: (state, action) => {
      state.cart[action.payload.id] = {
        id: action.payload.id,
        images: action.payload.images,
        name: action.payload.name,
        price: action.payload.price,
        quantity: action.payload.quantity,
      }
      state.totalPrice += action.payload.price * action.payload.quantity
    },
    incQuantityById: (state, action) => {
      // action.payload = id
      if (state.cart[action.payload]) {
        state.cart[action.payload].quantity += 1
        state.totalPrice += state.cart[action.payload].price
      }
    },
    decQuantityById: (state, action) => {
      // action.payload = id
      if (state.cart[action.payload]) {
        state.cart[action.payload].quantity -= 1
        state.totalPrice -= state.cart[action.payload].price
      }
    },
    updateQuantityById: (state, action) => {
      // action.payload = { id, quantity}
      if (state.cart[action.payload]) {
        const itemId = action.payload.id
        state.totalPrice -= state.cart[itemId].price * state.cart[itemId].quantity
        state.cart[itemId].quantity = action.payload.quantity
        state.totalPrice += state.cart[itemId].price * state.cart[itemId].quantity
      }
    },
    removeItemById: (state, action) => {
      // action.payload = id
      if (state.cart[action.payload]) {
        state.totalPrice -= state.cart[action.payload].price * state.cart[action.payload].quantity
        delete state.cart[action.payload]
      }
    },
    updateBillingInfo: (state, action) => {
      state.billingInfo = action.payload
    },
  },
})

export const addItemById = (item) => async (dispatch, getState) => {
  dispatch(CheckoutSlice.actions.addItemById(item))
}

export const incQuantityById = (itemId) => async (dispatch, getState) => {
  dispatch(CheckoutSlice.actions.incQuantityById(itemId))
}

export const decQuantityById = (itemId) => async (dispatch, getState) => {
  dispatch(CheckoutSlice.actions.decQuantityById(itemId))
}

export const updateQuantityById = (item) => async (dispatch, getState) => {
  dispatch(CheckoutSlice.actions.updateQuantityById(item))
}

export const removeItemById = (itemId) => async (dispatch, getState) => {
  dispatch(CheckoutSlice.actions.removeItemById(itemId))
}

export const updateBillingInfo = (billing) => async (dispatch, getState) => {
  dispatch(CheckoutSlice.actions.updateBillingInfo(billing))
}

export default CheckoutSlice
