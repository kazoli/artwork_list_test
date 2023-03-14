import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { tArtworkReduxState } from './artworkTypes';
import { initialArtworkReduxState } from './artworkInitialStates';
import { artworkGetData } from './artworkThunks';
import { setLocalStorage } from '../general/middlewares';

// artwork reducers and extra reducers
const artworkSlice = createSlice({
  name: 'artwork',
  initialState: initialArtworkReduxState,
  reducers: {
    updateListKeywords: (
      state,
      action: PayloadAction<tArtworkReduxState['queryParts']['keywords']>,
    ) => {
      // if keywords changes, page is set back to 1st one
      state.queryParts.page = '1';
      state.queryParts.keywords = action.payload;
    },
    updateListLimit: (state, action: PayloadAction<tArtworkReduxState['queryParts']['limit']>) => {
      // if limit changes, page is set back to 1st one
      state.queryParts.page = '1';
      state.queryParts.limit = action.payload;
    },
    updateListPage: (state, action: PayloadAction<tArtworkReduxState['queryParts']['page']>) => {
      state.queryParts.page = action.payload;
    },
    updateListView: (state, action: PayloadAction<tArtworkReduxState['listView']>) => {
      setLocalStorage('listView', action.payload);
      state.listView = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(artworkGetData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(artworkGetData.fulfilled, (state, action) => {
        state.status = 'idle';
      })
      .addCase(artworkGetData.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { updateListKeywords, updateListLimit, updateListPage, updateListView } =
  artworkSlice.actions;
export default artworkSlice.reducer;
