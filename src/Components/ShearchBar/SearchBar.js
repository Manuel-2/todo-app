import React from "react";
import { ReactComponent as SearchIcon } from "../../Assets/Icons/SearchIcon.svg";
import { globalContext } from "../GlobalContext/GlobalContext";

function SearchBar(props) {
  const { setSearchValue } = React.useContext(globalContext);

  const searchTodos = (event) => {
    const inputValue = event.target.value;
    setSearchValue(inputValue);
  };

  return (
    <div className="search-bar">
      <SearchIcon className="search-bar__icon" />
      <input
        className="search-bar__text-input"
        onChange={searchTodos}
        type={"text"}
        placeholder={props.placeholder}
      ></input>
    </div>
  );
}

export { SearchBar };
