import { Gender } from "./swapiConstants";

export type SwapiEntity = People | PeopleSearchResult;

export interface People {
  name: string;
  height: number;
  mass: number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: Gender;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export interface PeopleSearchResult {
  count: number;
  next: unknown;
  previous: unknown;
  results: People[];
}
