import { useNavigate } from 'react-router-dom';
import { HiOutlineMenu } from 'react-icons/hi';
import DropDownMenu from '../../general/DropDownMenu';

function HeaderMenu() {
  const navigate = useNavigate();
  const options = [
    { key: '/', value: 'Home' },
    { key: '/favorites', value: 'Favorites' },
  ];

  return (
    <DropDownMenu
      selector={<HiOutlineMenu className="text-[2rem] cursor-pointer outline-none" />}
      classContainer="relative"
      classList="right-0 whitespace-nowrap"
      classElement="transition-custom block cursor-pointer mt-[5px] p-[5px_10px] bg-[#ffffff] shadow-[inset_0_0_5px_0_#777] hover:shadow-[inset_0_0_4px_1px_#b17640] border border-[#777] hover:border-[#b17640] hover:text-highlighted"
      options={options}
      action={(value) => navigate(value)}
    />
  );
}

export default HeaderMenu;
