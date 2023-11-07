import { createSlice } from "@reduxjs/toolkit";

const keySlice = createSlice({
  name: "keySlice",
  initialState: {
    keyData: null,
  },
  reducers: {
    movieKeySlice: (state, action) => {
      state.keyData = action.payload;
    },
  },
});
export const { movieKeySlice } = keySlice.actions;
export default keySlice.reducer;
