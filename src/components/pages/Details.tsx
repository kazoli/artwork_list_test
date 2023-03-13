import { useEffect } from 'react';
import { useAppSelector } from '../../app/general/hooks';
import DefaultLayout from '../layout/DefaultLayout';

function Details() {
  useEffect(() => {
    document.title = 'ArtWork - Details';
  }, []);

  const artwork = useAppSelector((state) => state.artwork);

  return (
    <DefaultLayout loading={artwork.status === 'loading'}>
      <></>
    </DefaultLayout>
  );
}

export default Details;
