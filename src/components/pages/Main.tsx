import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/general/hooks';
import { artworkGetMainList } from '../../app/artwork/artworkThunks';
import { buildMainQuery } from '../../app/artwork/artworkMiddlewares';
import DefaultLayout from '../layout/DefaultLayout';
import ListHeader from '../list/ListHeader';
import { artworkSetMainListQuery } from '../../app/artwork/artworkSlice';
import ListBodyEmpty from '../list/ListBodyEmpty';
import ListBody from '../list/ListBody';

function Main() {
  const dispatch = useAppDispatch();
  const artwork = useAppSelector((state) => state.artwork);

  useEffect(() => {
    document.title = 'ArtWork';
  }, []);

  useEffect(() => {
    const timerId = setTimeout(() => {
      console.log('buildQuery', artwork.mainListQuery); //TODO
      const url = buildMainQuery(
        artwork.mainListKeywords,
        artwork.mainListLimit,
        artwork.mainListPage,
      );
      // to avoid unnecessary requests if query has not changed
      if (url !== artwork.mainListQuery) {
        console.log('mainListQuery', artwork.mainListQuery); // TODO
        dispatch(artworkSetMainListQuery(url));
        // dispatch(artworkGetMainList(url));
      }
    }, 250);
    return () => {
      // to cancel out double request to artwork api because of initial double rendering of strict mode in development
      clearTimeout(timerId);
    };
  }, [
    dispatch,
    artwork.mainListQuery,
    artwork.mainListKeywords,
    artwork.mainListLimit,
    artwork.mainListPage,
  ]);

  return (
    <DefaultLayout loading={artwork.status === 'loading'}>
      <>
        <ListHeader
          keywords={artwork.mainListKeywords}
          result={artwork.mainListResult}
          limit={artwork.mainListLimit}
          page={artwork.mainListPage}
          view={artwork.listView}
        />
        {!artwork.mainList.length ? (
          <ListBodyEmpty />
        ) : (
          <ListBody list={artwork.mainList} view={artwork.listView} />
        )}
      </>
    </DefaultLayout>
  );
}

export default Main;
