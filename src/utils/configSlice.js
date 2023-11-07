import { createSlice } from "@reduxjs/toolkit";

const config = createSlice({
  name: "config",
  initialState: {
    lang: "en",
  },
  reducers: {
    changeLangauge: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { changeLangauge } = config.actions;
export default config.reducer;
