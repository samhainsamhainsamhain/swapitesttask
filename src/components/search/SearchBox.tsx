import React from "react";

import classes from "./SearchBox.module.css"

export default function searchBox() {
  return (
    <header className={classes.searchBox}>
      <form>
        <input
          placeholder="Search for a character"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
