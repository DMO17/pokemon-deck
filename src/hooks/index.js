import { useContext } from "react";
import { PokemonContext } from "../contexts/PokemonProvider";

export const globalContextValues = () => {
  return useContext(PokemonContext);
};
