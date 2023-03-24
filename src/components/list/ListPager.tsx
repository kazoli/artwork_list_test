import { useAppDispatch } from '../../app/general/hooks';
import { tArtworkReduxState } from '../../app/artwork/artworkTypes';
import { artworkSetMainListPage } from '../../app/artwork/artworkSlice';
import { BiArrowToLeft, BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import LinkButton from '../general/LinkButton';

type tProps = {
  totalPages: tArtworkReduxState['mainListTotalPages'];
  page: tArtworkReduxState['mainListPage'];
};

function ListPager(props: tProps) {
  const dispatch = useAppDispatch();
  const prevPage = props.page === 1 ? 0 : props.page - 1;
  const nextPage = props.page === props.totalPages ? 0 : props.page + 1;

  return (
    <div className="list-element">
      {props.totalPages === 1 ? (
        '1 page'
      ) : (
        <>
          {prevPage ? (
            <>
              <div
                className="icon-button hover"
                onClick={() => dispatch(artworkSetMainListPage(1))}
              >
                <BiArrowToLeft />
              </div>
              <div
                className="icon-button hover"
                onClick={() => dispatch(artworkSetMainListPage(prevPage))}
              >
                <BiLeftArrowAlt />
              </div>
              <LinkButton
                class=""
                action={() => dispatch(artworkSetMainListPage(prevPage))}
                text={`${prevPage}`}
              />
            </>
          ) : (
            <div className="icon-button disabled">
              <BiLeftArrowAlt />
            </div>
          )}
          <LinkButton class="disabled" text={`${props.page}`} />
          {nextPage ? (
            <>
              <LinkButton
                class=""
                action={() => dispatch(artworkSetMainListPage(nextPage))}
                text={`${nextPage}`}
              />
              <div
                className="icon-button hover"
                onClick={() => dispatch(artworkSetMainListPage(nextPage))}
              >
                <BiRightArrowAlt />
              </div>
            </>
          ) : (
            <div className="icon-button disabled">
              <BiRightArrowAlt />
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default ListPager;
