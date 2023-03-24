import { tArtworkReduxState } from '../../app/artwork/artworkTypes';
import ListPager from './ListPager';
import ListResult from './ListResult';

type tProps = {
  result: tArtworkReduxState['mainListResult'];
  totalPages: tArtworkReduxState['mainListTotalPages'];
  page: tArtworkReduxState['mainListPage'];
};

function ListFooter(props: tProps) {
  return (
    <div className="flex flex-wrap-reverse items-center justify-between gap-[15px] my-[15px]">
      <ListResult result={props.result} />
      <ListPager totalPages={props.totalPages} page={props.page} />
    </div>
  );
}

export default ListFooter;
