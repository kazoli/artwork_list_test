// Type of redux state
export type tArtworkReduxState = {
  status: 'idle' | 'loading' | 'failed';
  queryParts: {
    keywords: string;
    limit: string;
    page: string;
  };
};
