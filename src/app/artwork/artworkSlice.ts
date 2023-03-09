import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialArtworkReduxState } from './artworkInitialState';

// artwork reducers and extra reducers
const artworkSlice = createSlice({
  name: 'artwork',
  initialState: initialArtworkReduxState,
  reducers: {
    artwork: (state, action: PayloadAction<string>) => {},
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(artworkGetData.pending, (state) => {
  //       state.status = 'loading';
  //     })
  //     .addCase(artworkGetData.fulfilled, (state, action) => {
  //       state.status = 'idle';
  //     })
  //     .addCase(artworkGetData.rejected, (state) => {
  //       state.status = 'failed';
  //     });
  // },
});

export const { artwork } = artworkSlice.actions;
export default artworkSlice.reducer;
