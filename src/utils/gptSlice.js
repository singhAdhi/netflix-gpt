import { createSlice } from "@reduxjs/toolkit";

const gptInfo = createSlice({
  name: "gptInfo",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});

export const { toggleGptSearchView } = gptInfo.actions;
export default gptInfo.reducer;
