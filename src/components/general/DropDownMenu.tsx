import { tDropDownOptions } from '../../app/general/types';

type tProps = {
  classContainer: string;
  classList: string;
  classElement: string;
  selector: string | JSX.Element;
  options: tDropDownOptions;
  action: (value: string) => void;
};

function DropDownMenu(props: tProps) {
  return (
    <div className={props.classContainer}>
      <button className="block w-[100%] peer">{props.selector}</button>
      <ul className={`${props.classList} hidden absolute`}>
        {props.options.map((element) => (
          <li
            key={element.key}
            className={props.classElement}
            onClick={() => props.action(element.key)}
          >
            {element.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropDownMenu;