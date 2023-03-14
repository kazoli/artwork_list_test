import { getLocalStorage } from '../general/middlewares';
import { tDropDownOptions } from '../general/types';
import { tArtworkReduxState } from './artworkTypes';

// Base url
export const artworkApiUrl = 'https://api.artic.edu/api/v1/artworks';

// Dinamic image url
export const artworkApiImageUrl = (id: number) =>
  `https://www.artic.edu/iiif/2/${id}/full/843,/0/default.jpg`;

// Base state of limits of artwork pages
export const artworkLimits: tDropDownOptions = [
  { key: '12', value: '12 / page' },
  { key: '24', value: '24 / page' },
  { key: '48', value: '48 / page' },
];

// Initial state of view of list
const listView = getLocalStorage('listView');

// Initial state of redux for artwork slice
export const initialArtworkReduxState: tArtworkReduxState = {
  status: 'idle',
  favorites: [],
  list: [],
  listResult: '0 result',
  listView: listView ? listView : 'grid',
  prevQuery: '', // to cancel unnecessary queries
  queryParts: {
    keywords: '',
    limit: '24',
    page: '1',
  },
};
