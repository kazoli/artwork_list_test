import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialArtworkReduxState } from './artworkInitialStates';
import { tArtworkReduxState } from './artworkTypes';

// artwork reducers and extra reducers
const artworkSlice = createSlice({
  name: 'artwork',
  initialState: initialArtworkReduxState,
  reducers: {
    updateArtworkQueryParts: (
      state,
      action: PayloadAction<{
        queryPart: keyof tArtworkReduxState['queryParts'];
        value: string;
      }>,
    ) => {
      state.queryParts[action.payload.queryPart] = action.payload.value;
    },
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

export const { updateArtworkQueryParts } = artworkSlice.actions;
export default artworkSlice.reducer;
