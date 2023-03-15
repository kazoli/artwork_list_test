import { artworkApiUrl } from './artworkInitialStates';
import { tArtworkReduxState } from './artworkTypes';

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
