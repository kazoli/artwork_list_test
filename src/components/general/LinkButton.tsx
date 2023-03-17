type tProps = {
  class: string;
  text: string;
  action?: () => void;
  icon?: JSX.Element;
};

function LinkButton(props: tProps) {
  return (
    <button className={`${props.class} link-button hover`} onClick={props.action}>
      {props.icon}
      <span>{props.text}</span>
    </button>
  );
}

export default LinkButton;
