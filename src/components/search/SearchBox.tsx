import React, { useState } from "react";

import { swapiFetch } from "../../swapi/swapiFetch";
import { PeopleSearchResult } from "../../swapi/swapiInterfaces";

import classes from "./SearchBox.module.css";

interface SearchBoxProps {
  onSearchResultReceived: (searchResult: PeopleSearchResult) => void;
}

export default function SearchBox(props: SearchBoxProps) {
  const [query, setQuery] = useState("");

  function queryChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
  }

  async function getSearchResult(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    const queryResult = (await swapiFetch(
      `people/?search=${query}`
    )) as PeopleSearchResult;
    props.onSearchResultReceived(queryResult);
  }

  return (
    <header className={classes.searchBox}>
      <form onSubmit={getSearchResult}>
        <input
          placeholder="Search for a character"
          onChange={queryChangeHandler}
          value={query}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
