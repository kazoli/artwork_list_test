import { tDropDownOptions } from '../general/types';
import { tArtworkReduxState } from './artworkTypes';

// Initial state of limits of artwork pages
export const initialArtworkLimits: tDropDownOptions = [
  { key: '12', value: '12 / page' },
  { key: '24', value: '24 / page' },
  { key: '48', value: '48 / page' },
  { key: '96', value: '96 / page' },
];

// Initial state of redux for artwork slice
export const initialArtworkReduxState: tArtworkReduxState = {
  status: 'idle',
  queryParts: {
    keywords: '',
    limit: '24',
    page: '',
  },
};
