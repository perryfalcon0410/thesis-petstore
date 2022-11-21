import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  data: [],
  categories: [],
  maxPrice: 0,
  minPrice: 0,
  total: 0,
  totalProducts: 0,
  page: 1,
  last_page: 1,
  queryParams: {
    page: 1,
    limit: 9,
    orderBy: '',
    categories: '',
    minPrice: 0,
    maxPrice: 0,
  },
}

const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    resetProduct(state, action) {
      return initialState
    },
    setProductData(state, action) {
      const { data, maxPrice, minPrice, total, page, last_page } = action.payload
      state.data = data
      if (!state.maxPrice) {
        state.maxPrice = Number(maxPrice)
        state.queryParams.maxPrice = Number(maxPrice)
      }
      if (!state.minPrice) {
        state.minPrice = Number(minPrice)
        state.queryParams.minPrice = Number(minPrice)
      }
      if (!state.totalProducts) {
        state.totalProducts = total
      }
      state.total = total
      state.page = page
      state.last_page = last_page
    },
    setQueryParams(state, action) {
      const { page, limit, orderBy, categories, minPrice, maxPrice } = action.payload
      state.queryParams.page = page
      state.queryParams.limit = limit
      state.queryParams.orderBy = orderBy
      state.queryParams.categories = categories
      if (minPrice) state.queryParams.minPrice = Number(minPrice)
      if (maxPrice) state.queryParams.maxPrice = Number(maxPrice)
    },
    setCategoriesData(state, action) {
      state.categories = action.payload
    },
  },
})
export const resetProduct = () => async (dispatch, getState) => {
  dispatch(ProductSlice.actions.resetProduct())
}
export const setProductData = (productData) => async (dispatch, getState) => {
  dispatch(ProductSlice.actions.setProductData(productData))
}
export const setCategoriesData = (categoriesData) => async (dispatch, getState) => {
  dispatch(ProductSlice.actions.setCategoriesData(categoriesData))
}
export const setQueryParams = (queryParams) => async (dispatch, getState) => {
  dispatch(ProductSlice.actions.setQueryParams(queryParams))
}

export default ProductSlice
