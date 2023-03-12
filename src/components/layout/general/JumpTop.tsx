import { useEffect, useState } from 'react';
import { AiOutlineUpCircle } from 'react-icons/ai';

function JumpTop() {
  const [jumpTop, setJumpTop] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => setJumpTop(window.scrollY > 200));
  }, []);

  return (
    <>
      {jumpTop && (
        <AiOutlineUpCircle
          className="fixed bottom-[15px] right-[15px] bg-[#909090] hover:bg-[#c69262] text-[2rem] text-[#ffffff] rounded-full shadow-[0_0_5px_1px_#a0a0a0] cursor-pointer transition-all opacity-50 hover:opacity-100 z-[10000]"
          title="Jump top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }
        />
      )}
    </>
  );
}

export default JumpTop;
