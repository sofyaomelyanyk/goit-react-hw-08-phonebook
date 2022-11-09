import { configureStore } from '@reduxjs/toolkit';
import { authSliceReducer } from './auth/authSlice';
import { contactsSliceReducer } from './contacts/contactsSlice';
import { filterSliceReducer } from './filter/filterSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'auth',
  storage: storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authSliceReducer),
    contacts: contactsSliceReducer,
    filter: filterSliceReducer,
  },
});

export const persistor = persistStore(store);
