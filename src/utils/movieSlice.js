import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovie: null,
  },
  reducers: {
    addMovie: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
  },
});
export const { addMovie, removeMovie } = movieSlice.actions;
export default movieSlice.reducer;
