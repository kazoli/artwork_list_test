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
    artworkSetMainListQuery: (
      state,
      action: PayloadAction<tArtworkReduxState['mainListQuery']>,
    ) => {
      state.mainListQuery = action.payload;
    },
    artworkSetMainListKeywords: (
      state,
      action: PayloadAction<tArtworkReduxState['mainListKeywords']>,
    ) => {
      // if keywords changes, page is set back to 1st one
      state.mainListPage = '1';
      // remove leading and trailing white spaces
      state.mainListKeywords = action.payload.trim();
    },
    artworkSetMainListLimit: (
      state,
      action: PayloadAction<tArtworkReduxState['mainListLimit']>,
    ) => {
      // if limit changes, page is set back to 1st one
      state.mainListPage = '1';
      state.mainListLimit = action.payload;
    },
    artworkSetMainListPage: (state, action: PayloadAction<tArtworkReduxState['mainListPage']>) => {
      state.mainListPage = action.payload;
    },
    artworkSetListView: (state, action: PayloadAction<tArtworkReduxState['listView']>) => {
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
        if (state.mainListKeywords) {
          // removing _score from data
          action.payload.data = action.payload.data.map((data) => ({
            id: data.id,
            image_id: data.image_id,
            title: data.title,
          }));
        }
        state.mainList = action.payload.data;
        state.mainListResult = `${action.payload.total} ${
          action.payload.total > 1 ? 'results' : 'result'
        }`;
      })
      .addCase(artworkGetData.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const {
  artworkSetMainListQuery,
  artworkSetMainListKeywords,
  artworkSetMainListLimit,
  artworkSetMainListPage,
  artworkSetListView,
} = artworkSlice.actions;
export default artworkSlice.reducer;
