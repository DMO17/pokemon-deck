import React, { useReducer } from "react";
import axios from "axios";

export const PokemonContext = React.createContext();

const initialState = {
  pokemonName: "charmander",
  pokemonUrl: "https://pokeapi.co/api/v2/pokemon/4/",
  pokemonData: {},
};

const ACTIONS = {
  GET_DATA_API: "GET-POKEMON-DATA-FROM-API",
};

const randomPokemon = async () => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=1000";
  const { data } = await axios.get(url);

  const pokemonArray = data.results;

  const randomPokemon =
    pokemonArray[Math.floor(Math.random() * pokemonArray.length)];

  return randomPokemon;
};

const reducer = async (state, action) => {
  if (action.type === ACTIONS.GET_DATA_API) {
    return {
      ...state,
      pokemonData: await randomPokemon(),
    };
  }
  return state;
};

export const PokemonProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const globalContextValues = { dispatch, ACTIONS, state, randomPokemon };

  return (
    <PokemonContext.Provider value={globalContextValues}>
      {children}
    </PokemonContext.Provider>
  );
};
