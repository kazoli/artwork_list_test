import { Link } from 'react-router-dom';
import { tArtworkBaseData } from '../../app/artwork/artworkTypes';
import { artworkApiImageUrl } from '../../app/artwork/artworkInitialStates';
import ImageBlock from '../general/ImageBlock';
import FavoriteButton from '../general/FavoriteButton';

type tProps = {
  listType: '' | 'favorites';
  data: tArtworkBaseData;
};

function ListBodyElement(props: tProps) {
  return (
    <div className="flex flex-wrap gap-[10px] bg-[#fff] shadow-[0_0_0_1px_#d0d0d0] p-[10px]">
      <ImageBlock src={artworkApiImageUrl(props.data.imageId)} alt={props.data.imageId} />
      <div className="flex-[10000_10000_275px] flex flex-col justify-between gap-[10px]">
        <Link
          to={`/details/${props.data.id}`}
          state={{ from: props.listType }}
          className="transition-custom hover:text-[#b17640] text-[1.25rem] outline-0"
        >
          {props.data.title}
        </Link>
        <FavoriteButton data={props.data} />
      </div>
    </div>
  );
}

export default ListBodyElement;
