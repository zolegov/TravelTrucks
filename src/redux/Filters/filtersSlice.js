import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: localStorage.getItem("location") || "",
  equipment: JSON.parse(localStorage.getItem("equipment")) || {
    AC: false,
    kitchen: false,
    automatic: false,
    TV: false,
    bathroom: false,
  },
  form: localStorage.getItem("form") || "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
      localStorage.setItem("location", action.payload);
    },
    toggleEquipment: (state, action) => {
      const equipment = action.payload;
      state.equipment[equipment] = !state.equipment[equipment];
      localStorage.setItem("equipment", JSON.stringify(state.equipment));
    },
    setVehicleType: (state, action) => {
      state.form = action.payload;
      localStorage.setItem("form", action.payload);
    },
    resetFilters: (state) => {
      state.location = "";
      state.equipment = {};
      state.vehicleType = "";
      localStorage.removeItem("location");
      localStorage.removeItem("equipment");
      localStorage.removeItem("vehicleType");
    },
  },
});

export const { setLocation, toggleEquipment, setVehicleType, resetFilters } =
  filtersSlice.actions;
const filtersReducer = filtersSlice.reducer;
export default filtersReducer;
export const selectLocation = (state) => state.filters.location;
export const selectEquipment = (state) => state.filters.equipment;
export const selectVehicleType = (state) => state.filters.form;
