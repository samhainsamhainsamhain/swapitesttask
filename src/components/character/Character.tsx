import React from "react";

import { People } from "../../swapi/swapiInterfaces";

import classes from "./Character.module.css";

interface CharacterProps {
  characterProperties: People;
}

export default function Character(props: CharacterProps) {
  const { characterProperties } = props;

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
      <p>homeworld: {characterProperties.homeworld}</p>
    </div>
  );
}
