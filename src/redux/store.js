import { configureStore } from "@reduxjs/toolkit";
import detailSlice from "./features/detailSlice";
import userSlice from "./features/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    detail: detailSlice,
  },
});

export default store;
