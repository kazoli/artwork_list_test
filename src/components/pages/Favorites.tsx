import { useEffect } from 'react';
import DefaultLayout from '../layout/DefaultLayout';

function Favorites() {
  useEffect(() => {
    document.title = 'ArtWork - Favorites';
  }, []);

  return (
    <DefaultLayout>
      <></>
    </DefaultLayout>
  );
}

export default Favorites;
