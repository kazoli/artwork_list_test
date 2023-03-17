import { useAppDispatch } from '../../app/general/hooks';
import { tArtworkReduxState } from '../../app/artwork/artworkTypes';
import { artworkLimits } from '../../app/artwork/artworkInitialStates';
import {
  artworkSetMainListKeywords,
  artworkSetMainListLimit,
  artworkSetListView,
  artworkSetFavouriteListKeywords,
} from '../../app/artwork/artworkSlice';
import ListSearch from './ListSearch';
import ListResult from './ListResult';
import ListLimits from './ListLimits';
import ListView from './ListView';

type tProps = {
  keywords: tArtworkReduxState['mainListKeywords'];
  result: tArtworkReduxState['mainListResult'];
  view: tArtworkReduxState['listView'];
  limit?: tArtworkReduxState['mainListLimit'];
  mainList: boolean;
};

function ListHeader(props: tProps) {
  const dispatch = useAppDispatch();

  return (
    <section>
      <ListSearch
        keywords={props.keywords}
        action={(value) =>
          dispatch(
            props.mainList
              ? artworkSetMainListKeywords(value)
              : artworkSetFavouriteListKeywords(value),
          )
        }
      />
      <div className="flex flex-wrap-reverse items-center justify-between gap-[15px] my-[15px]">
        <ListResult result={props.result} />
        <div className="flex flex-wrap-reverse items-center gap-[15px]">
          {props.limit && (
            <ListLimits
              limit={props.limit}
              limits={artworkLimits}
              action={(value) => dispatch(artworkSetMainListLimit(Number(value)))}
            />
          )}
          <ListView view={props.view} action={(value) => dispatch(artworkSetListView(value))} />
        </div>
      </div>
    </section>
  );
}

export default ListHeader;
