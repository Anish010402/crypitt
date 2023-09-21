import { configureStore } from '@reduxjs/toolkit';


import { cryptoNewsApi } from './config/cryptoNewsApi';

export default configureStore({
  reducer: {
    
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
});
