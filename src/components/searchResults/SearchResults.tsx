import React from "react";

import { People, PeopleSearchResult } from "../../swapi/swapiInterfaces";

import classes from "./SearchResults.module.css";

interface SearchResultsProps {
  results: PeopleSearchResult;
  resultClickHandler: (character: People) => void;
}

export default function SearchResults(props: SearchResultsProps) {
  function onResultClick(result: People) {
    props.resultClickHandler(result);
  }

  return (
    <ul className={classes.searchResults}>
      {props.results !== null &&
        props.results.results.map((result) => {
          return (
            <li
              key={result.url}
              className={classes.searchItem}
              onClick={() => onResultClick(result)}
            >
              {result.name}
            </li>
          );
        })}
    </ul>
  );
}
