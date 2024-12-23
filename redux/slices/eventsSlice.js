import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: [],
  bestEvents: [],
  loading: false,
  error: null,
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    setEvents: (state, action) => {
      state.events = action.payload;
    },
    setBestEvents: (state, action) => {
      state.bestEvents = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setEvents, setBestEvents, setLoading, setError } =
  eventsSlice.actions;

export const selectEvents = (state) => state.events.events;
export const selectBestEvents = (state) => state.events.bestEvents;
export const selectLoading = (state) => state.events.loading;
export const selectError = (state) => state.events.error;

export default eventsSlice.reducer;
