import { useContext } from "react";
import { PokemonContext } from "../contexts/PokemonProvider";

export const usePokemonContextValues = () => {
  return useContext(PokemonContext);
};
