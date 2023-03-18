import React from 'react';
import { Link } from 'react-router-dom';

type tProps = {
  url: string;
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
        <Link to={props.url} className="text-[1.5rem] text-[#0000ff]">
          reload this page
        </Link>
        .
      </section>
    </div>
  );
}

export default MissingData;
