import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { usePokemonContextValues } from "../../hooks";
import { fetchPokemonData } from "../../service/pokemonApi";

export const SearchForm = () => {
  const { state, dispatch, ACTIONS } = usePokemonContextValues();

  const [searchedName, setSearchedName] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchTerms] = useState();

  useEffect(async () => {
    const searchedPokemon = state.pokemonArray.find((each) => {
      return each.name === searchedName;
    });
    if (searchedPokemon) {
      setSearchTerms(false);

      const data = await fetchPokemonData(searchedPokemon.url);

      return dispatch({
        type: ACTIONS.SEARCHED_POKEMON,
        payload: { data, searchedPokemon },
      });
    } else {
      setSearchTerms(true);
    }
  }, [searchedName]);

  const onSubmit = (e) => {
    e.preventDefault();
    return setSearchedName(inputValue);
  };

  return (
    <Box sx={{ mb: 5, display: "flex", justifyContent: "center" }}>
      <form onSubmit={onSubmit}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Pokemon Name"
          variant="outlined"
          value={inputValue}
          onChange={(e) => {
            return setInputValue(e.target.value);
          }}
        />

        <Button variant="outlined" type="submit" fullWidth>
          SEARCH
        </Button>
        {searchResults === false && <div>NO POKEMON OF THAT NAME EXISTS</div>}
      </form>
    </Box>
  );
};
