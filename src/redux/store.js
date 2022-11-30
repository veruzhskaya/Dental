import { configureStore } from '@reduxjs/toolkit';
import services from './servicesSlice';



export const store = configureStore({
    reducer: {
      services,
     
    }
  })