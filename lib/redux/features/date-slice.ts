import { convertToDatesArr } from "@/utils/convertToDatesArr";
import { createSlice } from "@reduxjs/toolkit";

const asignDate = () => {
  const currentDate = new Date();
  currentDate.setHours(12, 0, 0, 0);
  return currentDate.getTime();
};

type InitialState = {
  activeDay: number;
  daysArr: number[];
};

const initialState: InitialState = {
  activeDay: asignDate(),
  daysArr: [],
};

export const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    setActiveDay: (state, action) => {
      state.activeDay = action.payload;
    },

    setDaysArr: (state, action) => {
      state.daysArr = convertToDatesArr(action.payload);
    },
  },
});

export const { setActiveDay, setDaysArr } = dateSlice.actions;
export default dateSlice.reducer;
