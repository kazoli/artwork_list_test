import { useEffect } from 'react';
import { buildListUrl } from '../../app/artwork/artworkMiddlewares';
import { artworkGetData } from '../../app/artwork/artworkThunks';
import { useAppDispatch, useAppSelector } from '../../app/general/hooks';
import DefaultLayout from '../layout/DefaultLayout';
import ListHeader from '../list/ListHeader';

function Main() {
  const dispatch = useAppDispatch();
  const artwork = useAppSelector((state) => state.artwork);

  useEffect(() => {
    document.title = 'ArtWork';
  }, []);

  useEffect(() => {
    const url = buildListUrl(artwork.queryParts, artwork.prevQuery);
    if (url) {
      // TODO dispatch(artworkGetData(url));
    }
  }, [dispatch, artwork.queryParts, artwork.prevQuery]);

  return (
    <DefaultLayout loading={artwork.status === 'loading'}>
      <>
        <ListHeader
          queryParts={artwork.queryParts}
          listView={artwork.listView}
          listResult={artwork.listResult}
        />
      </>
    </DefaultLayout>
  );
}

export default Main;
