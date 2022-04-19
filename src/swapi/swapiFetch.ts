import { SwapiEntity } from "./swapiInterfaces";

export async function swapiFetch(path: string): Promise<SwapiEntity> {
  const responce = await fetch("https://swapi.dev/api" + path);
  return await responce.json();
}
