import { tArtworkReduxState } from './artworkTypes';
import { artworkApiUrl } from './artworkInitialStates';
import { arrayIncludes, getLocalStorage } from '../general/middlewares';

// intializing list view from localstorage
export const intializeListView = () => {
  const listView = getLocalStorage('listView');
  return listView ? listView : 'grid';
};

// intializing favroite list from localstorage
export const intializeFavoriteList = () => {
  const favoriteList = getLocalStorage('favorites');
  return Array.isArray(favoriteList) ? favoriteList : [];
};

// modifying main list favorite properties
export const setMainListFavorites = (state: tArtworkReduxState) =>
  state.mainList.map((data) => ({
    ...data,
    favorite: !!arrayIncludes(state.favoriteList, 'id', data.id),
  }));

// build url for list
export const buildMainQuery = (
  mainListKeywords: tArtworkReduxState['mainListKeywords'],
  mainListLimit: tArtworkReduxState['mainListLimit'],
  mainListPage: tArtworkReduxState['mainListPage'],
) => {
  // set fields for query
  let query = '';

  // adding keywords and / or fields to query
  if (mainListKeywords) {
    query += `/search?q=${mainListKeywords}&fields=id,title,image_id`;
  } else {
    query += `?fields=id,title,image_id`;
  }

  // adding limit to query
  query += `&limit=${mainListLimit}`;

  // adding page to query
  query += `&page=${mainListPage}`;

  return artworkApiUrl + query;
};
