import { People } from "../../swapi/swapiInterfaces";

import classes from "./SearchHistory.module.css";

interface HistoryProps {
  searchHistory: People[];
  onHistoryItemClick: (character: People) => void;
}

export default function History(props: HistoryProps) {
  function onHistoryItemClick(history: People) {
    props.onHistoryItemClick(history);
  }

  return (
    <div className={classes.historyContainer}>
      <h3>Search History</h3>
      {props.searchHistory.length > 0 ? (
        <ul className={classes.historyList}>
          {props.searchHistory !== null &&
            props.searchHistory.map((history) => {
              return (
                <li
                  key={Math.random()}
                  onClick={() => onHistoryItemClick(history)}
                >
                  {history.name}
                </li>
              );
            })}
        </ul>
      ) : (
        <p>Empty. Search some characters first.</p>
      )}
    </div>
  );
}
