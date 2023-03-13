import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

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
        <MdOutlineFavoriteBorder className="header-center-icon" />
        <span>Favorites</span>
      </NavLink>
    </nav>
  );
}

export default HeaderNavigation;
