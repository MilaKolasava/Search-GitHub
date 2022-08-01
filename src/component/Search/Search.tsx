import React, { useEffect, useState } from "react";

interface SearchProps {
  value: string;
  onSubmit: (fixedValue: string) => void;
}

function Search(props: SearchProps) {
  const [tempSearch, setTempSearch] = useState(" ");

  useEffect(() => {
    setTempSearch(props.value);
  }, [props.value]);
  return (
    <div>
      <input
        placeholder="search"
        value={tempSearch}
        onChange={(e) => {
          setTempSearch(e.currentTarget.value);
        }}
      />
      <button
        onClick={() => {
          props.onSubmit(tempSearch);
        }}
      >
        find
      </button>
    </div>
  );
}

export default Search;
