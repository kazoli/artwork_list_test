import { useAppDispatch } from '../../app/general/hooks';
import { tArtworkReduxState } from '../../app/artwork/artworkTypes';
import { initialArtworkLimits } from '../../app/artwork/artworkInitialStates';
import { updateArtworkQueryParts } from '../../app/artwork/artworkSlice';
import ListSearch from './ListSearch';
import ListLimits from './ListLimits';
import ListView from './ListView';

type tProps = {
  queryParts: tArtworkReduxState['queryParts'];
};

function ListSettings(props: tProps) {
  const dispatch = useAppDispatch();

  return (
    <>
      <ListSearch keywords={props.queryParts.keywords} action={(value) => console.log(value)} />
      <div className="flex flex-wrap-reverse items-center justify-between gap-[15px] my-[15px]">
        <section className="list-element">{'123456 results'}</section>
        <section className="flex flex-wrap-reverse items-center gap-[15px]">
          <ListLimits
            limit={props.queryParts.limit}
            limits={initialArtworkLimits}
            action={(value) =>
              dispatch(updateArtworkQueryParts({ queryPart: 'limit', value: value }))
            }
          />
          <ListView />
        </section>
      </div>
    </>
  );
}

export default ListSettings;
