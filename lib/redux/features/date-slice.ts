import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  activeDay: number | string | Date | null;
};

const initialState: InitialState = {
  activeDay: null,
};

export const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    setActiveDay: (state, action) => {
      state.activeDay = action.payload;
    },
  },
});

export const { setActiveDay } = dateSlice.actions;
export default dateSlice.reducer;
