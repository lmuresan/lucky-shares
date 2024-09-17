import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { FILTERS, IFilterState } from '../../../types/store/FilterSlice';

const initialState: IFilterState = {
  query: "",
  categories: [],
}

export const gamesSlice = createSlice({
  name: FILTERS,
  initialState,
  reducers: {
    setQuery: (state: IFilterState, { payload: query }: PayloadAction<string>) => {
      state.query = query;
    },
    setCategory: (state: IFilterState, { payload: category }: PayloadAction<string>) => {
      if (state.categories.includes(category)) {
        state.categories = state.categories.filter((cat) => cat !== category);
        return;
      }

      state.categories.push(category);
    },
  },
})

export const { setQuery, setCategory } = gamesSlice.actions;

export default gamesSlice.reducer;
