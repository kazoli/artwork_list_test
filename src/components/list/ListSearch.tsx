import { useState } from 'react';
import { MdClear } from 'react-icons/md';
import { RiSendPlane2Line } from 'react-icons/ri';

type tProps = {
  keywords: string;
  action: (value: string) => void;
};

function ListSearch(props: tProps) {
  const [keywords, setKeywords] = useState(props.keywords);

  return (
    <div className="list-element ">
      <input
        type="text"
        autoComplete="off"
        placeholder="Enter keywords to search"
        className="flex-1 bg-transparent"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
      />
      <span className="icon-button hover transition-custom">
        <MdClear title="Clear text" onClick={() => setKeywords('')} />
      </span>
      <span className="icon-button hover transition-custom">
        <RiSendPlane2Line title="Search" onClick={() => props.action(keywords)} />
      </span>
    </div>
  );
}

export default ListSearch;
