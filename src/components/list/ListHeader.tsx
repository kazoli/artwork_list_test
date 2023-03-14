import { useAppDispatch } from '../../app/general/hooks';
import { tArtworkReduxState } from '../../app/artwork/artworkTypes';
import { artworkLimits } from '../../app/artwork/artworkInitialStates';
import {
  updateListKeywords,
  updateListLimit,
  updateListView,
} from '../../app/artwork/artworkSlice';
import ListSearch from './ListSearch';
import ListLimits from './ListLimits';
import ListView from './ListView';

type tProps = {
  queryParts: tArtworkReduxState['queryParts'];
  listView: tArtworkReduxState['listView'];
  listResult: tArtworkReduxState['listResult'];
};

function ListHeader(props: tProps) {
  const dispatch = useAppDispatch();

  return (
    <section>
      <ListSearch
        keywords={props.queryParts.keywords}
        action={(value) => dispatch(updateListKeywords(value))}
      />
      <div className="flex flex-wrap-reverse items-center justify-between gap-[15px] my-[15px]">
        <div className="list-element">{props.listResult}</div>
        <div className="flex flex-wrap-reverse items-center gap-[15px]">
          <ListLimits
            limit={props.queryParts.limit}
            limits={artworkLimits}
            action={(value) => dispatch(updateListLimit(value))}
          />
          <ListView listView={props.listView} action={(value) => dispatch(updateListView(value))} />
        </div>
      </div>
    </section>
  );
}

export default ListHeader;
