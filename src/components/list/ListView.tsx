import { TfiLayoutGrid2, TfiViewList } from 'react-icons/tfi';
import { tArtworkReduxState } from '../../app/artwork/artworkTypes';

type tProps = {
  listView: tArtworkReduxState['listView'];
  action: (value: tArtworkReduxState['listView']) => void;
};

function ListView(props: tProps) {
  return (
    <div className="list-element">
      <span
        className={`icon-button ${props.listView === 'grid' ? 'highlighted' : ''}`}
        title="Grid view"
        onClick={() => props.action('grid')}
      >
        <TfiLayoutGrid2 />
      </span>
      <span
        className={`icon-button ${props.listView === 'list' ? 'highlighted' : ''}`}
        title="List view"
        onClick={() => props.action('list')}
      >
        <TfiViewList />
      </span>
    </div>
  );
}

export default ListView;
