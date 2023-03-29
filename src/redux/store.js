import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;

export const server = "http://localhost:5500/api/v1";
