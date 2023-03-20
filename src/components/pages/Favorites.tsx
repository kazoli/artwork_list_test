import { useState, useEffect } from 'react';
import { useAppSelector } from '../../app/general/hooks';
import { tArtworkReduxState } from '../../app/artwork/artworkTypes';
import DefaultLayout from '../layout/DefaultLayout';
import ListHeader from '../list/ListHeader';
import ListBodyEmpty from '../list/ListBodyEmpty';
import ListBody from '../list/ListBody';

function Favorites() {
  const artwork = useAppSelector((state) => state.artwork);
  const [favoriteList, setFavoriteList] = useState<tArtworkReduxState['favoriteList']>([]);

  useEffect(() => {
    document.title = 'ArtWork - Favorites';
  }, []);

  useEffect(() => {
    if (artwork.favoriteListKeywords) {
      const regexp = new RegExp(`\\b${artwork.favoriteListKeywords}.*\\b`, 'i');
      setFavoriteList(artwork.favoriteList.filter((favorite) => favorite.title.match(regexp)));
    } else {
      setFavoriteList(artwork.favoriteList);
    }
  }, [artwork.favoriteList, artwork.favoriteListKeywords]);

  return (
    <DefaultLayout>
      <>
        <ListHeader
          keywords={artwork.favoriteListKeywords}
          result={favoriteList.length}
          view={artwork.listView}
          mainList={false}
        />
        {!favoriteList.length ? (
          <ListBodyEmpty />
        ) : (
          <ListBody list={favoriteList} view={artwork.listView} />
        )}
      </>
    </DefaultLayout>
  );
}

export default Favorites;
