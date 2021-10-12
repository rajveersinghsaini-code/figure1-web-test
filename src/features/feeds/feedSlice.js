import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchFeeds } from "./feedAPI";

const initialState = {
  feeds: {},
  loading: false,
};
export const retrieveFeeds = createAsyncThunk("feed/retrieve", async () => {
  const response = await fetchFeeds();
  return response;
});

export const feedSlice = createSlice({
  name: "feeds",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(retrieveFeeds.pending, (state) => {
        state.loading = true;
      })
      .addCase(retrieveFeeds.fulfilled, (state, action) => {
        state.loading = false;
        state.feeds = action.payload;
      })
      .addCase(retrieveFeeds.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error.message);
      });
  },
});

export default feedSlice.reducer;
