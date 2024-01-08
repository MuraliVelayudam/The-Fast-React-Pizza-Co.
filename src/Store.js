import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./feature/user/UserSlice";
import cartReducer from "./feature/cart/CartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
