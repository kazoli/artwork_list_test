import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';

function Header() {
  const navigate = useNavigate();
  const [prevTop, setPrevTop] = useState(0);
  const [position, setPosition] = useState('top-0');

  useEffect(() => {
    const updateScrollDirection = () => {
      const currTop = window.scrollY;
      if (currTop > prevTop) {
        // scroll down
        setPosition('top-[-200px]');
      } else {
        // scroll up
        setPosition('top-0');
      }
      setPrevTop(currTop);
    };
    window.addEventListener('scroll', updateScrollDirection);
    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, [prevTop]);

  return (
    <header
      className={`${position} transition-all duration-500 sticky z-[1000] bg-[#fff] py-[10px] shadow-[inset_0_0_10px_0_#777,0_0_2px_0_#777] border-y border-[#777]`}
    >
      <div className="layout-positioner flex items-center justify-between">
        <Logo navigate={() => navigate('/')} />
      </div>
    </header>
  );
}

export default Header;
