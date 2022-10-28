import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBox = (props) => {
  return (
    <div className="col col-sm-4">
      <div className="input-icons">
        <input
          className="form-control"
          placeholder="Type to search..."
          type="text"
          value={props.value}
          onChange={(e) => props.setSearchValue(e.target.value)}
        />
        <FaSearch className="icon" />
      </div>
    </div>
  );
};

export default SearchBox;
