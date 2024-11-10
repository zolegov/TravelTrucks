import { createSlice } from "@reduxjs/toolkit";
import { getCamper, getCampers } from "./operations";
const initialFavorites = JSON.parse(localStorage.getItem("favorites")) || {};
const campersSlice = createSlice({
  name: "camper",
  initialState: {
    trucks: [],
    truck: {},
    isLoading: false,
    hasMore: true,
    visibleItemsCount: 4,
    favorites: initialFavorites,
  },
  reducers: {
    loadMore: (state) => {
      state.visibleItemsCount += 4;
      state.hasMore = state.visibleItemsCount < state.trucks.length;
    },
    toggleFavorite: (state, action) => {
      const truckId = action.payload;

      state.favorites[truckId] = !state.favorites[truckId];

      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    clearTrucks: (state) => {
      state.trucks = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCampers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.trucks = action.payload;
        state.hasMore = state.visibleItemsCount < state.trucks.length;
      })
      .addCase(getCampers.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getCamper.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCamper.fulfilled, (state, action) => {
        state.isLoading = false;
        state.truck = action.payload;
      })
      .addCase(getCamper.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
export const { loadMore, toggleFavorite, clearTrucks } = campersSlice.actions;

const camperReducer = campersSlice.reducer;
export default camperReducer;
