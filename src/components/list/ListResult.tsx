import { tArtworkReduxState } from '../../app/artwork/artworkTypes';

type tProps = {
  result: tArtworkReduxState['mainListResult'];
};

function ListResult(props: tProps) {
  return (
    <div className="list-element">{`${props.result} ${
      props.result > 1 ? 'results' : 'result'
    }`}</div>
  );
}

export default ListResult;
