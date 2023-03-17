import { useEffect, useState } from 'react';
import { scrollTop } from '../../../app/general/middlewares';
import { AiOutlineUpSquare } from 'react-icons/ai';

function JumpTop() {
  const [jumpTop, setJumpTop] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => setJumpTop(window.scrollY > 200));
  }, []);

  return (
    <>
      {jumpTop && (
        <AiOutlineUpSquare
          className="fixed bottom-[15px] right-[15px] bg-[#909090] hover:bg-[#b17640] text-[2rem] text-[#ffffff] cursor-pointer transition-custom opacity-50 hover:opacity-100 z-[10000]"
          title="Jump top"
          onClick={() => scrollTop('smooth')}
        />
      )}
    </>
  );
}

export default JumpTop;
