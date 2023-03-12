import { useEffect } from 'react';
import Loading from './general/Loading';
import Header from './header/Header';
import Footer from './footer/Footer';
import JumpTop from './general/JumpTop';

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
      <main className="layout-positioner py-[20px] sm:py-[50px]">{props.children}</main>
      <Footer />
      <JumpTop />
    </>
  );
}

export default DefaultLayout;
