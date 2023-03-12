import { useEffect, useState } from 'react';
import HeaderLogo from './HeaderLogo';
import HeaderNavigation from './HeaderNavigation';
import HeaderMenu from './HeaderMenu';

function Header() {
  const [position, setPosition] = useState('top-0');

  // header show only at up scrolling
  useEffect(() => {
    const prev = { top: window.scrollY, position: 'top-0' };
    const updateScrollDirection = () => {
      const currPosition = window.scrollY > prev.top ? 'top-[-200px]' : 'top-0';
      if (prev.position !== currPosition) {
        // scroll direction change
        setPosition(currPosition);
        prev.position = currPosition;
      }
      prev.top = window.scrollY;
    };
    window.addEventListener('scroll', updateScrollDirection);
    return () => {
      // unmount
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, []);

  return (
    <header
      className={`${position} transition-all duration-500 sticky z-[1000] bg-[#fff] py-[10px] shadow-[inset_0_0_10px_0_#777,0_0_2px_0_#777] border-y border-[#777]`}
    >
      <div className="layout-positioner flex items-center justify-between gap-[60px]">
        <HeaderLogo />
        <HeaderNavigation />
        <HeaderMenu />
      </div>
    </header>
  );
}

export default Header;
