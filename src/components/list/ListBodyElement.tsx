import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../app/general/hooks';
import { tArtworkListElement } from '../../app/artwork/artworkTypes';
import { artworkApiImageUrl } from '../../app/artwork/artworkInitialStates';
import { artworkAddFavorite, artworkRemoveFavorite } from '../../app/artwork/artworkSlice';
import { TbHeart, TbHeartOff } from 'react-icons/tb';
import ImageBlock from '../general/ImageBlock';
import LinkButton from '../general/LinkButton';

type tProps = {
  data: tArtworkListElement;
};

function ListBodyElement(props: tProps) {
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-wrap gap-[10px] bg-[#fff] shadow-[0_0_0_1px_#d0d0d0] p-[10px]">
      <ImageBlock src={artworkApiImageUrl(props.data.image_id)} alt={props.data.image_id} />
      <div className="flex-[10000_10000_275px] flex flex-col justify-between gap-[10px]">
        <Link
          to={`/details/${props.data.id}`}
          className="transition-custom hover:text-[#b17640] text-[1.25rem] outline-0"
        >
          {props.data.title}
        </Link>
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
      </div>
    </div>
  );
}

export default ListBodyElement;
