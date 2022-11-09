import { createSlice } from '@reduxjs/toolkit';

import { register, logIn, logOut } from './authOperations';

initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending]: state => {
      state.contacts.isLoading = true;
    },
    [register.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [register.rejected]: (state, { payload }) => {
      state.contacts.error = payload;
      state.contacts.isLoading = false;
    },
    [logIn.pending]: state => {
      state.contacts.isLoading = true;
    },
    [logIn.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logIn.rejected]: (state, { payload }) => {
      state.contacts.error = payload;
      state.contacts.isLoading = false;
    },
    [logOut.pending]: state => {
      state.contacts.isLoading = true;
    },
    [logOut.fulfilled]: (state, { payload }) => {
      state.user.name = '';
      state.user.email = '';
      state.token = null;
      state.isLoggedIn = false;
    },
    [logOut.rejected]: (state, { payload }) => {
      state.contacts.error = payload;
      state.contacts.isLoading = false;
    },
  },
});

export const authSliceReducer = authSlice.reducer;
