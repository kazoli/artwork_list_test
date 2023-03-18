import { tListView } from '../general/types';

// type of artwork element for lists
export type tArtworkBaseData = {
  id: number;
  imageId: string;
  title: string;
  favorite: boolean;
};

// type of redux state
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
