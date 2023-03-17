import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { tArtworkListElement, tArtworkReduxState } from './artworkTypes';
import { initialArtworkReduxState } from './artworkInitialStates';
import { artworkGetMainList } from './artworkThunks';
import {
  arrayIncludes,
  scrollTop,
  setLocalStorage,
  storageMaxLengthExceeded,
} from '../general/middlewares';
import { setMainListFavorites } from './artworkMiddlewares';

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
      state.mainListPage = 1;
      // remove leading and trailing white spaces
      state.mainListKeywords = action.payload.trim();
    },
    artworkSetMainListLimit: (
      state,
      action: PayloadAction<tArtworkReduxState['mainListLimit']>,
    ) => {
      // if limit changes, page is set back to 1st one
      state.mainListPage = 1;
      state.mainListLimit = action.payload;
    },
    artworkSetMainListPage: (state, action: PayloadAction<tArtworkReduxState['mainListPage']>) => {
      state.mainListPage = action.payload;
      // if page changes scroll to top of the list
      scrollTop('smooth');
    },
    artworkSetListView: (state, action: PayloadAction<tArtworkReduxState['listView']>) => {
      setLocalStorage('listView', action.payload);
      state.listView = action.payload;
    },
    artworkAddFavorite: (state, action: PayloadAction<tArtworkListElement>) => {
      const favorites = [action.payload, ...state.favoriteList];
      // if max lenght of storage would be exceeded then drops the the last element from the array
      if (storageMaxLengthExceeded(favorites)) {
        favorites.pop();
      }
      // store extended favorites array into local storage
      setLocalStorage('favorites', favorites);
      state.favoriteList = favorites;
      // change favorite property of selected element
      state.mainList = setMainListFavorites(state);
    },
    artworkRemoveFavorite: (state, action: PayloadAction<tArtworkListElement['id']>) => {
      state.favoriteList = state.favoriteList.filter((favorite) => favorite.id !== action.payload);
      // store shrunk favorites array into local storage
      setLocalStorage('favorites', state.favoriteList);
      // change favorite property of selected element
      state.mainList = setMainListFavorites(state);
    },
    artworkSetFavouriteListKeywords: (
      state,
      action: PayloadAction<tArtworkReduxState['favoriteListKeywords']>,
    ) => {
      // remove leading and trailing white spaces
      state.favoriteListKeywords = action.payload.trim();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(artworkGetMainList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(artworkGetMainList.fulfilled, (state, action) => {
        state.status = 'idle';
        // adding favorite property to list
        state.mainList = action.payload.data.map((data) => ({
          id: data.id,
          image_id: data.image_id,
          title: data.title,
          favorite: !!arrayIncludes(state.favoriteList, 'id', data.id),
        }));
        state.mainListResult = action.payload.total;
        state.mainListTotalPage = action.payload.total_pages;
      })
      .addCase(artworkGetMainList.rejected, (state) => {
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
  artworkAddFavorite,
  artworkRemoveFavorite,
  artworkSetFavouriteListKeywords,
} = artworkSlice.actions;
export default artworkSlice.reducer;
