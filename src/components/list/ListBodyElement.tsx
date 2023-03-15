import { tArtworkListElement } from '../../app/artwork/artworkTypes';

type tProps = {
  data: tArtworkListElement;
};

function ListBodyElement(props: tProps) {
  return (
    <div className="list-element">
      <img src="" alt="" className="" />
    </div>
  );
}

export default ListBodyElement;
