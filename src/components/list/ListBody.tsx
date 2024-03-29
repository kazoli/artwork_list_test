import { tArtworkBaseData, tArtworkReduxState } from '../../app/artwork/artworkTypes';
import ListBodyElement from './ListBodyElement';

type tProps = {
  listType: '' | 'favorites';
  list: tArtworkBaseData[];
  view: tArtworkReduxState['listView'];
};

function ListBody(props: tProps) {
  const view = props.view === 'list' ? '' : 'grid-cols-[repeat(auto-fill,minmax(275px,1fr))]';

  return (
    <section className={`grid gap-[15px] ${view}`}>
      {props.list.map((data) => (
        <ListBodyElement key={data.id} listType={props.listType} data={data} />
      ))}
    </section>
  );
}

export default ListBody;
