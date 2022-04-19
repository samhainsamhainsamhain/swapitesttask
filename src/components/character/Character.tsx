import React from "react";
import classes from "./Character.module.css";

export default function Character() {
  const characterProperties = {
    name: "luke",
    height: "2 meters",
    mass: "2 tonns",
    hair_color: "black",
    skin_color: "white",
    eye_color: "green",
    birth_year: "1567",
    gender: "male",
    homeworld: "moon",
  };

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
