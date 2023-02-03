import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: { value: '' },
  reducers: {
    setValueFilter(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setValueFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
