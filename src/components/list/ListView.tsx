import { TfiLayoutGrid2, TfiViewList } from 'react-icons/tfi';

function ListView() {
  return (
    <div className="list-element">
      <span className="icon-button highlighted" title="Grid view">
        <TfiLayoutGrid2 />
      </span>
      <span className="icon-button" title="List view">
        <TfiViewList />
      </span>
    </div>
  );
}

export default ListView;
