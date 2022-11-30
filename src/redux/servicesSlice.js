import { createSlice } from '@reduxjs/toolkit';

export const servicesSlice = createSlice({
    name: 'services',
    initialState: {
        selectedCategory: "Все услуги"
    },
    reducers: {
       filterCategory: (state, action) => {
        state.selectedCategory = action.payload;
       }
      }
    
  })
  
 
  export const getSelectedCategory  = state => state.services.selectedCategory;
  export const { filterCategory } = servicesSlice.actions;
  export default servicesSlice.reducer