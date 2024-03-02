import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  date: Date;
  activeDay: Date | null;
};

const initialState: InitialState = {
  date: new Date(),
  activeDay: null,
};

export const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {},
});

export const {} = dateSlice.actions;
export default dateSlice.reducer;
