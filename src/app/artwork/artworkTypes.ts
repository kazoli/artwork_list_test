import { tListView } from '../general/types';

// Base type for artwork elements
export type tArtworkBaseData = {
  id: number;
  imageId: string;
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
  mainList: tArtworkBaseData[];

  favoriteListKeywords: string;
  favoriteList: tArtworkBaseData[];

  details: tArtworkBaseData & {
    artist: string;
    department: string;
  };
};
