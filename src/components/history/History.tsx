import React from "react";

import { People } from "../../swapi/swapiInterfaces";

interface HistoryProps {
  searchHistory: People[];
  onHistoryItemClick: (character: People) => void;
}

export default function History(props: HistoryProps) {
  function onHistoryItemClick(history: People) {
    props.onHistoryItemClick(history);
  }

  return (
    <div>
      <h3>Search History</h3>
      {props.searchHistory.length > 0 ? <ul>
        {props.searchHistory !== null &&
          props.searchHistory.map((history) => {
            return (
              <li key={Math.random()} onClick={() => onHistoryItemClick(history)}>
                {history.name}
              </li>
            );
          })}
      </ul> : <p>Empty. Search some characters first</p>}
    </div>
  );
}
