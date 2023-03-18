import { tDropDownOption } from '../general/types';
import { tArtworkReduxState } from './artworkTypes';
import { intializeFavoriteList, intializeListView } from './artworkMiddlewares';

// base url
export const artworkApiUrl = 'https://api.artic.edu/api/v1/artworks';

// dinamic image url
export const artworkApiImageUrl = (id: string) =>
  `https://www.artic.edu/iiif/2/${id}/full/843,/0/default.jpg`;

// base state of limits of artwork pages
export const artworkLimits: tDropDownOption[] = [
  { key: 12, value: '12 / page' },
  { key: 24, value: '24 / page' },
  { key: 48, value: '48 / page' },
];

// initial details of artwork
export const initialArtworkDetails: tArtworkReduxState['details'] = {
  id: 0,
  imageId: '',
  title: '',
  artist: '',
  department: '',
  favorite: false,
};
Object.freeze(initialArtworkDetails);

// initial state of redux for artwork slice
export const initialArtworkReduxState: tArtworkReduxState = {
  status: 'idle',
  listView: intializeListView(),

  mainListResult: 0,
  mainListKeywords: '',
  mainListLimit: 24,
  mainListPage: 1,
  mainListTotalPage: 0,
  mainListQuery: '',
  mainList: [],

  favoriteListKeywords: '',
  favoriteList: intializeFavoriteList(),

  details: initialArtworkDetails,
};
