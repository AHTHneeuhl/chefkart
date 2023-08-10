import { configureStore } from "@reduxjs/toolkit";
import cart from "redux/slices/cart";

export const store = configureStore({
  reducer: {
    cart,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
