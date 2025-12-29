import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {}, // { id: {product, quantity} }
  totalQuantity: 0,
  totalPrice: 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      if (state.items[product.id]) {
        state.items[product.id].quantity += 1;
      } else {
        state.items[product.id] = { product, quantity: 1 };
      }
      state.totalQuantity += 1;
      state.totalPrice += product.price;
    },
    increase: (state, action) => {
      const id = action.payload;
      state.items[id].quantity += 1;
      state.totalQuantity += 1;
      state.totalPrice += state.items[id].product.price;
    },
    decrease: (state, action) => {
      const id = action.payload;
      if (state.items[id].quantity > 0) {
        state.items[id].quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= state.items[id].product.price;
        if (state.items[id].quantity === 0) delete state.items[id];
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const qty = state.items[id].quantity;
      const price = state.items[id].product.price * qty;
      state.totalQuantity -= qty;
      state.totalPrice -= price;
      delete state.items[id];
    }
  }
});

export const { addToCart, increase, decrease, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
