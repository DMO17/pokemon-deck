import React from "react";
import { CharacterInfo } from "../components/CharacterInfo";
import { PokeCard } from "../components/PokeCard";
import { SearchForm } from "../components/SearchForm";

import Box from "@mui/material/Box";
import { usePokemonContextValues } from "../hooks";

export const PokemonInfo = () => {
  const {
    state: { toggleInfo },
  } = usePokemonContextValues();

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
