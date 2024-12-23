import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import reservationReducer from "./slices/reservationSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    reservations: reservationReducer,
  },
});
