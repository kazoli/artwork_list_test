import { NavLink } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { TbHeart } from 'react-icons/tb';

function HeaderNavigation() {
  return (
    <nav className="hidden sm:flex flex-1 gap-[20px]">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? 'header-center text-highlighted' : 'header-center'
        }
      >
        <AiOutlineHome className="header-center-icon" />
        <span>Home</span>
      </NavLink>
      <NavLink
        to="/favorites"
        className={({ isActive }) =>
          isActive ? 'header-center text-highlighted' : 'header-center'
        }
      >
        <TbHeart className="header-center-icon" />
        <span>Favorites</span>
      </NavLink>
    </nav>
  );
}

export default HeaderNavigation;
