import { tListView } from '../general/types';

// Type of artwork element for lists
export type tArtworkElement = {};

// Type of redux state
export type tArtworkReduxState = {
  status: 'idle' | 'loading' | 'failed';
  favorites: tArtworkElement[];
  list: tArtworkElement[];
  listResult: string;
  listView: tListView;
  prevQuery: string;
  queryParts: {
    keywords: string;
    limit: string;
    page: string;
  };
};
