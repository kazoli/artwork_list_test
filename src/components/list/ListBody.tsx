import { tArtworkListElement, tArtworkReduxState } from '../../app/artwork/artworkTypes';
import ListBodyElement from './ListBodyElement';

type tProps = {
  list: tArtworkListElement[];
  view: tArtworkReduxState['listView'];
};

function ListBody(props: tProps) {
  const view = props.view === 'list' ? '' : 'grid-cols-[repeat(auto-fill,minmax(300px,1fr))]';

  return (
    <section className={`grid gap-[20px] ${view}`}>
      {props.list.map((data) => (
        <ListBodyElement data={data} />
      ))}
    </section>
  );
}

export default ListBody;
