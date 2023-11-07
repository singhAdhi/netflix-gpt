import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovie: null,
    trendingMovie: null,
    popularMovie: null,
    trendingSeries: null,
  },
  reducers: {
    addMovie: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
    addTrendingMovie: (state, action) => {
      state.trendingMovie = action.payload;
    },
    addPopularMovie: (state, action) => {
      state.popularMovie = action.payload;
    },
    addTrendingSeries: (state, action) => {
      state.trendingSeries = action.payload;
    },
  },
});
export const {
  addMovie,
  addTrendingMovie,
  addPopularMovie,
  addTrendingSeries,
} = movieSlice.actions;
export default movieSlice.reducer;
