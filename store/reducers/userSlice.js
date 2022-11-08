import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: null,
  firstName: '',
  lastName: '',
  username: '',
  password: '',
}

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      const { id, firstName, lastName, username, password } = action.payload
      state.id = id
      state.firstName = firstName
      state.lastName = lastName
      state.username = username
      state.password = password
    },
    resetUser(state, action) {
      const { id, firstName, lastName, username, password } = initialState
      state.id = id
      state.firstName = firstName
      state.lastName = lastName
      state.username = username
      state.password = password
    },
  },
})

export const setUser = (user) => async (dispatch, getState) => {
  dispatch(UserSlice.actions.setUser(user))
}

export const resetUser = () => async (dispatch, getState) => {
  dispatch(UserSlice.actions.resetUser())
}

export default UserSlice
