import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import NoImage from '../../utils/no_image.png';

type tProps = {
  src: string;
  alt: string;
};

function ImageBlock(props: tProps) {
  const [bigImg, setBigImg] = useState(false);
  const imgParentClass = bigImg
    ? 'fixed inset-0 z-[100000] bg-[#000]'
    : 'shadow-[inset_0_0_10px_0_#e0e0e0] bg-[#f7efe9] p-[10px] sm:h-[420px] sm:w-[420px]';
  const imgClass = bigImg
    ? 'max-w-screen max-h-screen transition-custom'
    : 'max-h-[400px] max-w-[400px]';

  return (
    <div
      className={`${imgParentClass} flex flex-[1_1_auto] items-center justify-center cursor-pointer`}
      onClick={() => setBigImg(!bigImg)}
    >
      {bigImg && (
        <AiOutlineClose className="fixed top-[10px] right-[10px] bg-black/20 text-[#fff] text-[30px]" />
      )}
      <img
        src={props.src}
        alt={props.alt}
        className={`${imgClass} bg-[#fff] block`}
        onError={(e) => {
          e.currentTarget.onerror = null; // prevents looping
          e.currentTarget.src = NoImage; // loads no image
        }}
      />
    </div>
  );
}

export default ImageBlock;
