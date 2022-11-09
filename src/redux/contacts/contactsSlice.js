import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContacts,
  deleteContacts,
  updateContacts,
} from 'redux/contacts/contactsOperations';

const initialState = {
  item: {
    contacts: [],
    isLoading: false,
    error: null,
  },
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.contacts.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.contacts.item = payload;
      state.contacts.isLoading = false;
    },
    [fetchContacts.rejected]: (state, { payload }) => {
      state.contacts.error = payload;
      state.contacts.isLoading = false;
    },
    [addContacts.pending]: state => {
      state.contacts.isLoading = true;
    },
    [addContacts.fulfilled]: (state, { payload }) => {
      state.contacts.item.push(payload);
      state.contacts.isLoading = false;
    },
    [addContacts.rejected]: (state, { payload }) => {
      state.contacts.error = payload;
      state.contacts.isLoading = false;
    },
    [deleteContacts.pending]: state => {
      state.contacts.isLoading = true;
    },
    [deleteContacts.fulfilled]: (state, { payload }) => {
      state.contacts.item = state.contacts.item.filter(
        ({ id }) => id !== payload
      );
      state.contacts.isLoading = false;
    },
    [deleteContacts.rejected]: (state, { payload }) => {
      state.contacts.error = payload;
      state.contacts.isLoading = false;
    },
    [updateContacts.pending]: state => {
      state.contacts.isLoading = true;
    },
    [updateContacts.fulfilled]: (state, { payload }) => {
      state.contacts.item.findIndex(({ id }) => id === payload.id);
      state.contacts.isLoading = false;
    },
    [updateContacts.rejected]: (state, { payload }) => {
      state.contacts.error = payload;
      state.contacts.isLoading = false;
    },
  },
});

export const contactsSliceReducer = contactsSlice.reducer;
