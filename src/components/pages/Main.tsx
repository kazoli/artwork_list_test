import { useEffect } from 'react';
import { useAppSelector } from '../../app/general/hooks';
import DefaultLayout from '../layout/DefaultLayout';
import ListSettings from '../list/ListSettings';

function Main() {
  useEffect(() => {
    document.title = 'ArtWork';
  }, []);

  const artwork = useAppSelector((state) => state.artwork);

  return (
    <DefaultLayout loading={artwork.status === 'loading'}>
      <>
        <ListSettings queryParts={artwork.queryParts} />
      </>
    </DefaultLayout>
  );
}

export default Main;
