import { tDropDownOption } from '../general/types';
import { tArtworkReduxState } from './artworkTypes';
import { intializeFavoriteList, intializeListView } from './artworkMiddlewares';

// Base url
export const artworkApiUrl = 'https://api.artic.edu/api/v1/artworks';

// Dinamic image url
export const artworkApiImageUrl = (id: string) =>
  `https://www.artic.edu/iiif/2/${id}/full/843,/0/default.jpg`;

// Base state of limits of artwork pages
export const artworkLimits: tDropDownOption[] = [
  { key: 12, value: '12 / page' },
  { key: 24, value: '24 / page' },
  { key: 48, value: '48 / page' },
];

// Initial details of artwork and freezing it to surely keep intact
export const initialArtworkDetails: tArtworkReduxState['details'] = {
  id: 0,
  imageId: '',
  title: '',
  artist: '',
  department: '',
  favorite: false,
};
Object.freeze(initialArtworkDetails);

// Initial state of redux for artwork slice
export const initialArtworkReduxState: tArtworkReduxState = {
  status: 'idle',
  listView: intializeListView(), // get initial state from localstorage

  mainListResult: 0,
  mainListKeywords: '',
  mainListLimit: 24,
  mainListPage: 1,
  mainListTotalPage: 0,
  mainListQuery: '',
  mainList: [],

  favoriteListKeywords: '',
  favoriteList: intializeFavoriteList(), // get initial state from localstorage

  details: initialArtworkDetails,
};
