import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/general/hooks';
import { artworkGetMainList } from '../../app/artwork/artworkThunks';
import { artworkSetMainListQuery } from '../../app/artwork/artworkSlice';
import { buildMainQuery } from '../../app/artwork/artworkMiddlewares';
import DefaultLayout from '../layout/DefaultLayout';
import ListHeader from '../list/ListHeader';
import ListBodyEmpty from '../list/ListBodyEmpty';
import ListBody from '../list/ListBody';
import ListFooter from '../list/ListFooter';

function Main() {
  const dispatch = useAppDispatch();
  const artwork = useAppSelector((state) => state.artwork);

  useEffect(() => {
    document.title = 'ArtWork';
  }, []);

  useEffect(() => {
    const timerId = setTimeout(() => {
      const url = buildMainQuery(
        artwork.mainListKeywords,
        artwork.mainListLimit,
        artwork.mainListPage,
      );
      // to avoid unnecessary requests if query has not changed
      if (url !== artwork.mainListQuery) {
        dispatch(artworkSetMainListQuery(url));
        dispatch(artworkGetMainList(url));
      }
    }, 500);
    return () => {
      // to throttle too fast consecutive requesting and send only the last one after the delay
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
          view={artwork.listView}
          mainList={true}
        />
        {!artwork.mainList.length ? (
          <ListBodyEmpty />
        ) : (
          <>
            <ListBody listType="" list={artwork.mainList} view={artwork.listView} />
            <ListFooter
              result={artwork.mainListResult}
              totalPages={artwork.mainListTotalPages}
              page={artwork.mainListPage}
            />
          </>
        )}
      </>
    </DefaultLayout>
  );
}

export default Main;
