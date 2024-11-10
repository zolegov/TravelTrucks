import { configureStore } from "@reduxjs/toolkit";
import camperReducer from "./Campers/slice";
import filtersReducer from "./Filters/filtersSlice";
export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    camper: camperReducer,
  },
});
