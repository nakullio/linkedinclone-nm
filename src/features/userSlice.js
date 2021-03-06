import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;

    },
    logout: state => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
// this is gonna be pull the data to data layer
// selectors
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;