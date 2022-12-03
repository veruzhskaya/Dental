import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
      addItemToCart: (state, action) => {
        const timeId = new Date().getTime()
        state.cartItems.push({
            id: timeId,
            dentId:action.payload.dent.id,
            quantity:action.payload.quantity,
            totalPrice: action.payload.quantity*action.payload.dent.price
        })

      },
      removeItemFromCart: (state, action) => {
        state.cartItems = state.cartItems.filter(
            cartItem => cartItem.id !== action.payload.cartItemId
            )
      }
      }
    
  })
  
  export const getTotalPrice = state => {
    return state.cart.cartItems.reduce ((total, cartItems)=>{
        return cartItems.totalPrice + total
    },0)
  }
  export const getCartItems = state => state.cart.cartItems;
  export const { addItemToCart, removeItemFromCart } = CartSlice.actions;
  export default CartSlice.reducer;