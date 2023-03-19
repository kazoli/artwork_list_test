import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { tArtworkBaseData, tArtworkReduxState } from './artworkTypes';
import { initialArtworkDetails, initialArtworkReduxState } from './artworkInitialStates';
import { artworkGetDetails, artworkGetMainList } from './artworkThunks';
import {
  arrayIncludes,
  scrollTop,
  setLocalStorage,
  storageMaxLengthExceeded,
} from '../general/middlewares';
import { setMainListFavorites } from './artworkMiddlewares';

// Artwork reducers and extra reducers
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
    artworkAddFavorite: (state, action: PayloadAction<tArtworkBaseData>) => {
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
      // if setting of favorite comes from details page
      if (state.details.id) {
        state.details.favorite = true;
      }
    },
    artworkRemoveFavorite: (state, action: PayloadAction<tArtworkBaseData['id']>) => {
      state.favoriteList = state.favoriteList.filter((favorite) => favorite.id !== action.payload);
      // store shrunk favorites array into local storage
      setLocalStorage('favorites', state.favoriteList);
      // change favorite property of selected element
      state.mainList = setMainListFavorites(state);
      // if setting of favorite comes from details page
      state.details.favorite = false;
    },
    artworkSetFavouriteListKeywords: (
      state,
      action: PayloadAction<tArtworkReduxState['favoriteListKeywords']>,
    ) => {
      // remove leading and trailing white spaces
      state.favoriteListKeywords = action.payload.trim();
    },
    artworkResetDetails: (state) => {
      // deatils object is set back to initial state
      state.details = initialArtworkDetails;
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
          imageId: data.image_id,
          title: data.title,
          favorite: !!arrayIncludes(state.favoriteList, 'id', data.id),
        }));
        // changing result number of main list
        state.mainListResult = action.payload.total;
        // changing total pages for paginator to work correctly in main list
        state.mainListTotalPage = action.payload.total_pages;
      })
      .addCase(artworkGetMainList.rejected, (state) => {
        state.status = 'failed';
      })

      .addCase(artworkGetDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(artworkGetDetails.fulfilled, (state, action) => {
        state.status = 'idle';
        // storing details page data object
        state.details = {
          id: action.payload.id,
          imageId: action.payload.image_id,
          title: action.payload.title,
          artist: action.payload.artist_display,
          department: action.payload.department_title,
          favorite: !!arrayIncludes(state.favoriteList, 'id', action.payload.id),
        };
      })
      .addCase(artworkGetDetails.rejected, (state) => {
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
  artworkResetDetails,
} = artworkSlice.actions;
export default artworkSlice.reducer;
