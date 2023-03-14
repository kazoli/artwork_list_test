import { tArtworkReduxState } from './artworkTypes';

// build url for list
export const buildListUrl = (
  queryParts: tArtworkReduxState['queryParts'],
  prevQuery: tArtworkReduxState['prevQuery'],
) => {
  console.log(prevQuery);
  console.log(queryParts);
  return '';
};
