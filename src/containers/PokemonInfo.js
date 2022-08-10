import React, { useEffect } from "react";
import { CharacterInfo } from "../components/CharacterInfo";
import { PokeCard } from "../components/PokeCard";
import { SearchForm } from "../components/SearchForm";
import Box from "@mui/material/Box";
import { usePokemonContextValues } from "../hooks";
import { getPokemonList, fetchPokemonData } from "../service/pokemonApi";

export const PokemonInfo = () => {
  const {
    state: { toggleInfo },
    state,
  } = usePokemonContextValues();

  useEffect(() => {
    const fetchPokeList = async () => {
      const data = await getPokemonList();
      return (state.pokemonArray = data);
    };

    fetchPokeList();
  }, [state]);

  useEffect(() => {
    const fetchPokeData = async () => {
      const data = await fetchPokemonData(state.pokemonUrl);

      return (state.pokemonData = data);
    };

    fetchPokeData();
  }, [state]);

  return (
    <Box
      sx={{
        padding: "30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        flexWrap: "wrap",
      }}
    >
      <SearchForm />
      <PokeCard />
      {toggleInfo && <CharacterInfo />}
    </Box>
  );
};
