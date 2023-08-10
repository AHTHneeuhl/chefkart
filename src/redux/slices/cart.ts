import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  total: 0,
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        total: state.total + action.payload,
      };
    },
  },
});

export const { addItemToCart } = cart.actions;

export default cart.reducer;
