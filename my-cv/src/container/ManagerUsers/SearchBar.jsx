import React, { useState } from "react";

export default function SearchBar(props) {
  const [search, setSearch] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value);
  };
  const onClick = () => {
    props.searchClick(search);
  };

  return (
    <form >
      <input
        className="ipt"
        type="text"
        placeholder="Search..."
        onChange={(e) => onChange(e)}
      />
      <button className="btn" type="button" onClick={() => onClick(search)}>
        Search
      </button>
    </form>
  );
}
