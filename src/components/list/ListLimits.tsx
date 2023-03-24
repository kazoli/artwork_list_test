import { useMemo } from 'react';
import { tArtworkReduxState } from '../../app/artwork/artworkTypes';
import { tDropDownOption } from '../../app/general/types';
import DropDownMenu from '../general/DropDownMenu';
import DropDownSelector from '../general/DropDownSelector';

type tProps = {
  limit: tArtworkReduxState['mainListLimit'];
  limits: tDropDownOption[];
  action: (value: tDropDownOption['key']) => void;
};

type tDropDown = { selected: string | JSX.Element; options: tDropDownOption[] };

function ListLimits(props: tProps) {
  const dropDown: tDropDown = useMemo(() => {
    const dropDown: tDropDown = { selected: '', options: [] };
    props.limits.forEach((limitOption) => {
      if (limitOption.key === props.limit) {
        dropDown.selected = <DropDownSelector selected={limitOption.value} />;
      } else {
        dropDown.options = [...dropDown.options, limitOption];
      }
    });
    if (!dropDown.selected) {
      // select first option if empty or wrong default value
      dropDown.selected = <DropDownSelector selected={props.limits[0].value} />;
      // drop the first option from list
      dropDown.options.shift();
    }
    return dropDown;
  }, [props.limit, props.limits]);

  return (
    <DropDownMenu
      selector={dropDown.selected}
      classContainer="list-element items-start"
      classList="left-0 mt-[35px] whitespace-nowrap"
      classElement="transition-custom block cursor-pointer mt-[5px] p-[10px] bg-[#fff] shadow-[0_0_0_1px_#d0d0d0] hover:shadow-[0_0_0_1px_#b17640] hover:text-highlighted"
      options={dropDown.options}
      action={(value) => props.action(value)}
    />
  );
}

export default ListLimits;
