import { HiOutlinePaintBrush } from 'react-icons/hi2';

type tProps = {
  navigate: () => void;
};

function Logo(props: tProps) {
  return (
    <div className="flex items-center cursor-pointer" onClick={props.navigate}>
      <span className="text-[1.5rem] text-[#000] uppercase">art</span>
      <HiOutlinePaintBrush className="text-[2rem] text-[#b17640]" />
      <span className="text-[1.5rem] text-[#000] uppercase">work</span>
    </div>
  );
}

export default Logo;
