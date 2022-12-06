import React from "react";

const SearchBox: React.FC = () => {
  return (
    <div className="card">
      <input id="search-box" type="text" placeholder="Search Username..." />
    </div>
  );
};

export default SearchBox;
