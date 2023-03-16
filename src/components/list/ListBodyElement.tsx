import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../app/general/hooks';
import { tArtworkListElement } from '../../app/artwork/artworkTypes';
import { artworkApiImageUrl } from '../../app/artwork/artworkInitialStates';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import ImageBlock from '../general/ImageBlock';
import LinkButton from '../general/LinkButton';
import { artworkAddFavorite } from '../../app/artwork/artworkSlice';

type tProps = {
  data: tArtworkListElement;
};

function ListBodyElement(props: tProps) {
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-wrap gap-[10px] bg-[#fff] shadow-[0_0_0_1px_#d0d0d0] p-[10px]">
      <ImageBlock src={artworkApiImageUrl(props.data.image_id)} alt={props.data.image_id} />
      {/* <ImageBlock
        src={
          'http://3.bp.blogspot.com/-VWabYxHu8Xs/TjZL-CxzqkI/AAAAAAAAAao/eGw9FJs3yp0/s1600/Animal+Wallpaper%252C+Picture%252C+Images+and+Photo+Download+3.jpg'
        }
        alt=""
      /> */}
      <div className="flex-[10000_10000_400px] flex flex-col justify-between gap-[10px]">
        <Link
          to={`/details/${props.data.id}`}
          className="transition-custom hover:text-[#b17640] text-[1.25rem] outline-0"
        >
          {props.data.title}
        </Link>
        <LinkButton
          icon={<MdOutlineFavoriteBorder className="mr-[5px]" />}
          action={() => dispatch(artworkAddFavorite(props.data))}
        />
      </div>
    </div>
  );
}

export default ListBodyElement;
