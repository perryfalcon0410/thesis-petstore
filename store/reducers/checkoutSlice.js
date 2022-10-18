import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: {},
  billingInfo: {
    billing_first_name: "",
    billing_last_name: "",
    billing_company: "",
    billing_country: "VN",
    billing_address_1: "",
    billing_postcode: "",
    billing_city: "",
    billing_phone: "",
    billing_email: "",
    account_username: "",
    account_password: "",
    shipping_first_name: "",
    shipping_last_name: "",
    shipping_company: "",
    shipping_country: "VN",
    shipping_address_1: "",
    shipping_postcode: "",
    shipping_city: "",
    order_comments: "",
    payment_method: "bacs",
  },
  SO: -1,
};

const CheckoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    resetState: (state) => (state = initialState),
    addCart: (state, action) => {
      if (state.cart[action.payload.id]) {
        state.cart[action.payload.id].quantity += 1;
      } else {
        state.cart[action.payload.id] = {
          id: action.payload.id,
          images: action.payload.images,
          name: action.payload.name,
          price: action.payload.price,
          quantity: 1,
        };
      }
    },
    updateCartById: (state, action) => {
      state.cart[action.payload.id] = { ...action.payload };
    },
    removeCartById: (state, action) => {
      delete state.cart[action.payload];
    },
    updateBillingInfo: (state, action) => {
      state.billingInfo = action.payload;
    },
    updatePromoCode: (state, action) => {
      state.billingInfo.promo_code = action.payload;
    },
    updateSO: (state, action) => {
      state["SO"] = action.payload;
    },
  },
});

export default CheckoutSlice;
