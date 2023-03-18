import { useAppDispatch } from '../../app/general/hooks';
import { artworkAddFavorite, artworkRemoveFavorite } from '../../app/artwork/artworkSlice';
import { tArtworkBaseData } from '../../app/artwork/artworkTypes';
import { TbHeart, TbHeartOff } from 'react-icons/tb';
import LinkButton from './LinkButton';

type tProps = {
  data: tArtworkBaseData;
};

function FavoriteButton(props: tProps) {
  const dispatch = useAppDispatch();

  return (
    <>
      {props.data.favorite ? (
        <LinkButton
          class="py-[10px] text-[1.1rem]"
          action={() => dispatch(artworkRemoveFavorite(props.data.id))}
          icon={<TbHeartOff className="mr-[5px] text-[1.1rem]" />}
          text="Remove from favorites"
        />
      ) : (
        <LinkButton
          class="py-[10px] text-[1.1rem]"
          action={() => dispatch(artworkAddFavorite({ ...props.data, favorite: true }))}
          icon={<TbHeart className="mr-[5px] text-[1.1rem]" />}
          text="Add to favorites"
        />
      )}
    </>
  );
}

export default FavoriteButton;
