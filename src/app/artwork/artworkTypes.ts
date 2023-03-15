import { tListView } from '../general/types';

// Type of artwork element for lists
export type tArtworkListElement = {
  id: number;
  image_id: string;
  title: string;
};

// Type of redux state
export type tArtworkReduxState = {
  status: 'idle' | 'loading' | 'failed';
  listView: tListView;

  mainListResult: string;
  mainListKeywords: string;
  mainListLimit: string;
  mainListPage: string;
  mainListQuery: string;
  mainList: tArtworkListElement[];

  favoriteListKeywords: string;
  favoriteList: tArtworkListElement[];
};
