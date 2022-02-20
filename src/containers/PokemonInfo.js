import React from "react";
import { CharacterInfo } from "../components/CharacterInfo";
import { PokeCard } from "../components/PokeCard";
import { SearchForm } from "../components/SearchForm";

export const PokemonInfo = () => {
  return (
    <div>
      <SearchForm />
      <PokeCard />
      <CharacterInfo />
    </div>
  );
};
