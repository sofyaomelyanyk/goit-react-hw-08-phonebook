import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { set } from 'immer/dist/internal';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// {
//    "name": "Adrian Cross",
//    "email": "across@mail.com",
//    "password": "examplepwd12345"
//  }

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {}
});

// {
//    "email": "string",
//    "password": "string"
//  }

export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {}
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    const { data } = await axios.post('/users/logout');
    token.unset();
    return data;
  } catch (error) {}
});


// export const fetchCurrentUser = createAsyncThunk('auth/current', async () => {
//    try {
//      const { data } = await axios.post('/users/current');
//      token.unset();
//      return data;
//    } catch (error) {}
//  });