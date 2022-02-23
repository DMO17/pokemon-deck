import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { usePokemonContextValues } from "../../hooks";
import { fetchPokemonData } from "../../service/pokemonApi";

export const SearchForm = () => {
  const { state, dispatch, ACTIONS } = usePokemonContextValues();

  const [inputValue, setInputValue] = useState("");
  // const [searchResults, setSearchTerms] = useState();

  const onSubmit = async (e) => {
    e.preventDefault();
    const searchedPokemon = state.pokemonArray.find((each) => {
      return each.name === inputValue;
    });

    if (searchedPokemon) {
      // setSearchTerms(false);

      const data = await fetchPokemonData(searchedPokemon.url);

      dispatch({
        type: ACTIONS.SEARCHED_POKEMON,
        payload: { data, searchedPokemon },
      });

      setInputValue("");
    }
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
          onChange={(e) => setInputValue(e.target.value)}
        />

        <Button variant="outlined" type="submit" fullWidth>
          SEARCH
        </Button>
        {/* {searchResults === false && <div>NO POKEMON OF THAT NAME EXISTS</div>} */}
      </form>
    </Box>
  );
};
