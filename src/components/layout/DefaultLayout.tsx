import { useEffect } from 'react';
import Loading from './Loading';
import Header from './Header';
import Footer from './Footer';

type tProps = {
  children: JSX.Element;
  loading?: boolean;
};

function DefaultLayout(props: tProps) {
  useEffect(() => {
    // scroll top in case of page change
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {props.loading && <Loading />}
      <Header />
      <main className="py-[20px] sm:py-[50px]">{props.children}</main>
      <Footer />
    </>
  );
}

export default DefaultLayout;
