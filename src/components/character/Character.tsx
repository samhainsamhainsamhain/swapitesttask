import { useEffect, useState } from "react";
import { swapiFetch } from "../../swapi/swapiFetch";
import { People } from "../../swapi/swapiInterfaces";

import classes from "./Character.module.css";

interface CharacterProps {
  characterProperties: People;
}

interface Homeworld {
  name: string;
}

export default function Character(props: CharacterProps) {
  const { characterProperties } = props;
  const [homeworldName, setHomeworldName] = useState("");

  useEffect(() => {
    getSearchResult();
  }, []);

  async function getSearchResult() {
    const queryResult = (await swapiFetch(
      `${props.characterProperties.homeworld.split("api/")[1]}`
    )) as Homeworld;
    setHomeworldName(queryResult.name);
  }

  return (
    <div className={classes.character}>
      <h1>{characterProperties.name}</h1>
      <p>height: {characterProperties.height}</p>
      <p>mass: {characterProperties.mass}</p>
      <p>hair color: {characterProperties.hair_color}</p>
      <p>skin color: {characterProperties.skin_color}</p>
      <p>eye color: {characterProperties.eye_color}</p>
      <p>birth year: {characterProperties.birth_year}</p>
      <p>gender: {characterProperties.gender}</p>
      <p>homeworld: {homeworldName}</p>
    </div>
  );
}
