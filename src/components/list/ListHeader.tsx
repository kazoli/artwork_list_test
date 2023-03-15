import { useAppDispatch } from '../../app/general/hooks';
import { tArtworkReduxState } from '../../app/artwork/artworkTypes';
import { artworkLimits } from '../../app/artwork/artworkInitialStates';
import {
  artworkSetMainListKeywords,
  artworkSetMainListLimit,
  artworkSetListView,
} from '../../app/artwork/artworkSlice';
import ListSearch from './ListSearch';
import ListLimits from './ListLimits';
import ListView from './ListView';

type tProps = {
  keywords: tArtworkReduxState['mainListKeywords'];
  result: tArtworkReduxState['mainListResult'];
  limit: tArtworkReduxState['mainListLimit'];
  page: tArtworkReduxState['mainListPage'];
  view: tArtworkReduxState['listView'];
};

function ListHeader(props: tProps) {
  const dispatch = useAppDispatch();

  return (
    <section>
      <ListSearch
        keywords={props.keywords}
        action={(value) => dispatch(artworkSetMainListKeywords(value))}
      />
      <div className="flex flex-wrap-reverse items-center justify-between gap-[15px] my-[15px]">
        <div className="list-element">{props.result}</div>
        <div className="flex flex-wrap-reverse items-center gap-[15px]">
          <ListLimits
            limit={props.limit}
            limits={artworkLimits}
            action={(value) => dispatch(artworkSetMainListLimit(value))}
          />
          <ListView view={props.view} action={(value) => dispatch(artworkSetListView(value))} />
        </div>
      </div>
    </section>
  );
}

export default ListHeader;
