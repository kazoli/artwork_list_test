import { useEffect } from 'react';

function Details() {
  useEffect(() => {
    document.title = 'ArtWork - Details';
  }, []);

  return <div></div>;
}

export default Details;
