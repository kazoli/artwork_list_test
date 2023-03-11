import { useAppDispatch, useAppSelector } from '../../app/general/hooks';
import DefaultLayout from '../layout/DefaultLayout';

function Main() {
  const dispatch = useAppDispatch();
  const artwork = useAppSelector((state) => state.artwork);

  return (
    <DefaultLayout loading={artwork.status === 'loading'}>
      <></>
    </DefaultLayout>
  );
}

export default Main;
