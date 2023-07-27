import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/general/hooks';
import { artworkGetDetails } from '../../app/artwork/artworkThunks';
import { artworkApiImageUrl, artworkApiUrl } from '../../app/artwork/artworkInitialStates';
import { artworkResetDetails } from '../../app/artwork/artworkSlice';
import { TiArrowBackOutline } from 'react-icons/ti';
import DefaultLayout from '../layout/DefaultLayout';
import MissingData from '../general/MissingData';
import ImageBlock from '../general/ImageBlock';
import FavoriteButton from '../general/FavoriteButton';
import LinkButton from '../general/LinkButton';

function Details() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const dispatch = useAppDispatch();
  const artwork = useAppSelector((state) => state.artwork);
  const url = `${artworkApiUrl}/${params.artworkId}?fields=id,title,image_id,artist_display,department_title`;

  useEffect(() => {
    document.title = 'ArtWork - Details';
    dispatch(artworkGetDetails(url));
    return () => {
      // clean up
      dispatch(artworkResetDetails());
    };
  }, [dispatch, url]);

  return (
    <DefaultLayout loading={artwork.status === 'loading'}>
      <>
        {artwork.status === 'failed' ? (
          <MissingData reloadAction={() => dispatch(artworkGetDetails(url))} />
        ) : (
          !!artwork.details.id && (
            <div className="flex flex-wrap gap-[10px] sm:gap-[30px]">
              <ImageBlock
                src={artworkApiImageUrl(artwork.details.imageId)}
                alt={artwork.details.imageId}
              />
              <div className="flex-[10000_10000_420px] flex flex-wrap content-between">
                <div className="w-full">
                  <section className="text-[1.8rem] leading-tight text-[#303030]">
                    {artwork.details.title}
                  </section>
                  <section className="text-[1.2rem] text-[#777]">{artwork.details.artist}</section>
                  <section className="my-[20px]">
                    <span className="font-bold">Department: </span>
                    {artwork.details.department}
                  </section>
                </div>
                <div className="flex flex-wrap gap-[10px]">
                  <LinkButton
                    class="favorite-button"
                    action={() => navigate(`/${location.state ? location.state.from : ''}`)}
                    icon={<TiArrowBackOutline className="mr-[5px] text-[1.1rem]" />}
                    text="Back to list"
                  />
                  <FavoriteButton
                    data={{
                      id: artwork.details.id,
                      imageId: artwork.details.imageId,
                      title: artwork.details.title,
                      favorite: artwork.details.favorite,
                    }}
                  />
                </div>
              </div>
            </div>
          )
        )}
      </>
    </DefaultLayout>
  );
}

export default Details;
