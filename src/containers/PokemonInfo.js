import React from "react";
import { CharacterInfo } from "../components/CharacterInfo";
import { PokeCard } from "../components/PokeCard";
import { SearchForm } from "../components/SearchForm";

import Box from "@mui/material/Box";

export const PokemonInfo = () => {
  return (
    <Box
      sx={{
        padding: "80px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        flexWrap: "wrap",
      }}
    >
      <SearchForm />
      <PokeCard />
      <CharacterInfo />
    </Box>
  );
};