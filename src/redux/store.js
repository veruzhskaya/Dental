import { configureStore } from '@reduxjs/toolkit';
import services from './servicesSlice';
import cart from './CartSlice';


export const store = configureStore({
    reducer: {
      services,
      cart, 
    }
  })