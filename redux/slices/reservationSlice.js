import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reservations: [],
};

const reservationSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    addReservation: (state, action) => {
      state.reservations.push(action.payload);
    },
    removeReservation: (state, action) => {
      state.reservations = state.reservations.filter(
        (event) => event.id !== action.payload
      );
    },
  },
});

export const { addReservation, removeReservation } = reservationSlice.actions;

export const selectReservations = (state) => state.reservations.reservations;

export default reservationSlice.reducer;
