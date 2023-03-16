type tProps = {
  icon?: JSX.Element;
  action: () => void;
};

function LinkButton(props: tProps) {
  return (
    <button className="link-button hover" onClick={props.action}>
      {props.icon}
      <span>Favorite</span>
    </button>
  );
}

export default LinkButton;
