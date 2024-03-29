import { configureStore } from "@reduxjs/toolkit";
import dateSlice from "./features/date-slice";
export const store = configureStore({
  reducer: {
    dateSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
