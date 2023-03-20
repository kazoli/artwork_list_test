import { Link } from 'react-router-dom';

type tProps = {
  reloadAction: () => void;
};

function MissingData(props: tProps) {
  return (
    <div>
      <section className="text-[2rem]">Page data could not be loaded!</section>
      <section className="text-[1.5rem] text-[#303030]">
        Go back to{' '}
        <Link to="/" className="text-[1.5rem] text-[#0000ff]">
          Home page
        </Link>{' '}
        or try to{' '}
        <Link
          to={window.location.href}
          onClick={props.reloadAction}
          className="text-[1.5rem] text-[#0000ff]"
        >
          reload this page
        </Link>
        .
      </section>
    </div>
  );
}

export default MissingData;
