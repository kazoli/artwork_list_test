import { tArtworkReduxState } from '../../app/artwork/artworkTypes';
import { TfiLayoutGrid2, TfiViewList } from 'react-icons/tfi';

type tProps = {
  view: tArtworkReduxState['listView'];
  action: (value: tArtworkReduxState['listView']) => void;
};

function ListView(props: tProps) {
  return (
    <div className="list-element">
      <span
        className={`icon-button ${props.view === 'grid' ? 'highlighted' : ''}`}
        title="Grid view"
        onClick={() => props.action('grid')}
      >
        <TfiLayoutGrid2 />
      </span>
      <span
        className={`icon-button ${props.view === 'list' ? 'highlighted' : ''}`}
        title="List view"
        onClick={() => props.action('list')}
      >
        <TfiViewList />
      </span>
    </div>
  );
}

export default ListView;
