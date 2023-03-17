import { tListView } from '../general/types';

// Type of artwork element for lists
export type tArtworkListElement = {
  id: number;
  image_id: string;
  title: string;
  favorite: boolean;
};

// Type of redux state
export type tArtworkReduxState = {
  status: 'idle' | 'loading' | 'failed';
  listView: tListView;

  mainListResult: number;
  mainListKeywords: string;
  mainListLimit: number;
  mainListPage: number;
  mainListTotalPage: number;
  mainListQuery: string;
  mainList: tArtworkListElement[];

  favoriteListKeywords: string;
  favoriteList: tArtworkListElement[];
};
