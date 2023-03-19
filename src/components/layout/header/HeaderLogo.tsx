import { NavLink } from 'react-router-dom';
import { HiOutlinePaintBrush } from 'react-icons/hi2';

function HeaderLogo() {
  return (
    <NavLink to="/" className="flex items-center cursor-pointer">
      <span className="header-logo-text">art</span>
      <HiOutlinePaintBrush className="text-[2rem] text-[#b17640]" />
      <span className="header-logo-text">work</span>
    </NavLink>
  );
}

export default HeaderLogo;
