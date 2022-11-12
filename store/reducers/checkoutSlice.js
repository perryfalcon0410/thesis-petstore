import { createSlice } from '@reduxjs/toolkit'
import { cartDetail } from 'components/mocks/cartDetail'

const initialState = {
  cart: cartDetail,
  bill: {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    company: '',
    region: '',
    district: '',
    ward: '',
    address: '',
    orderComment: '',
    paymentMethod: 'paypal',
  },
  shipping: {
    orderCode: '',
    totalFee: 0,
    expectedDeliveryTime: '',
  },
  totalPrice: 8.26,
}

const CheckoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    resetCheckout: (state) => {
      state = initialState
    },
    addItem: (state, action) => {
      if (state.cart[action.payload.id]) {
        state.cart[action.payload.id].quantity += action.payload.quantity
      } else {
        state.cart[action.payload.id] = {
          id: action.payload.id,
          images: action.payload.images,
          name: action.payload.name,
          price: action.payload.price,
          quantity: action.payload.quantity,
        }
      }
      state.totalPrice += action.payload.price * action.payload.quantity
    },
    incQuantityById: (state, action) => {
      // action.payload = id
      const itemId = action.payload
      if (state.cart[itemId]) {
        state.cart[itemId].quantity += 1
        state.totalPrice += state.cart[itemId].price
      }
    },
    decQuantityById: (state, action) => {
      // action.payload = id
      const itemId = action.payload
      if (state.cart[itemId]) {
        state.cart[itemId].quantity -= 1
        state.totalPrice -= state.cart[itemId].price
      }
    },
    updateQuantityById: (state, action) => {
      // action.payload = { id, quantity }
      const itemId = action.payload.id
      if (state.cart[itemId]) {
        state.totalPrice -= state.cart[itemId].price * state.cart[itemId].quantity
        state.cart[itemId].quantity = action.payload.quantity
        state.totalPrice += state.cart[itemId].price * state.cart[itemId].quantity
      }
    },
    removeItemById: (state, action) => {
      // action.payload = id
      const itemId = action.payload
      if (state.cart[itemId]) {
        state.totalPrice -= state.cart[itemId].price * state.cart[itemId].quantity
        delete state.cart[itemId]
      }
    },
    updateBillingAndShipping: (state, action) => {
      // action.payload = { bill, shipping }
      state.bill = action.payload.bill
      state.shipping = action.payload.shipping
      state.totalPrice = Number((state.totalPrice + action.payload.shipping.totalFee).toFixed(2))
    },
  },
})

export const addItem = (item) => async (dispatch, getState) => {
  dispatch(CheckoutSlice.actions.addItem(item))
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

export const updateBillingAndShipping = (item) => async (dispatch, getState) => {
  dispatch(CheckoutSlice.actions.updateBillingAndShipping(item))
}

export default CheckoutSlice
