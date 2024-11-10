import { createSelector } from "reselect";

const selectFiltersState = (state) => state.filters;

export const selectFilters = createSelector(
  [selectFiltersState],
  (filters) => ({
    location: filters.location,
    equipment: filters.equipment,
    form: filters.form,
  })
);
