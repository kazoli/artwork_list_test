import { useState } from 'react';
import NoImage from '../../utils/no_image.png';

type tProps = {
  className: string;
  src: string;
  alt: string;
};

function Image(props: tProps) {
  const [img, setImg] = useState({ src: props.src, alt: props.alt });

  return (
    <img
      className={props.className}
      src={img.src}
      alt={img.alt}
      onError={() => setImg({ src: NoImage, alt: 'No image' })}
    />
  );
}

export default Image;
