import { tArtworkReduxState } from '../../app/artwork/artworkTypes';
import ListPager from './ListPager';
import ListResult from './ListResult';

type tProps = {
  result: tArtworkReduxState['mainListResult'];
  totalPage: tArtworkReduxState['mainListTotalPage'];
  page: tArtworkReduxState['mainListPage'];
};

function ListFooter(props: tProps) {
  return (
    <div className="flex flex-wrap-reverse items-center justify-between gap-[15px] my-[15px]">
      <ListResult result={props.result} />
      <ListPager totalPage={props.totalPage} page={props.page} />
    </div>
  );
}

export default ListFooter;
