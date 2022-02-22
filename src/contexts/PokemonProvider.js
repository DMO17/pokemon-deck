import React, { useEffect, useReducer } from "react";

const pokemonSampleData = [
  {
    id: 1,
    name: "bulbasaur",
    type: "grass",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    height: 7,
    weight: 69,
    abilities: "overgrow,chlorophyll",
    genus: "Seed Pokémon",
    baseExp: 64,
    baseHappiness: 50,
    growthRate: "medium-slow",
    captureRate: 45,
    stats: [
      { name: "hp", strength: 45 },
      { name: "attack", strength: 49 },
      { name: "defense", strength: 49 },
      { name: "special-attack", strength: 65 },
      { name: "special-defense", strength: 65 },
      { name: "speed", strength: 45 },
    ],
    bio:
      "A strange seed was\n" +
      "planted on its\n" +
      "back at birth.\fThe plant sprouts\n" +
      "and grows with\n" +
      "this POKéMON.+A strange seed was\n" +
      "planted on its\n" +
      "back at birth.\fThe plant sprouts\n" +
      "and grows with\n" +
      "this POKéMON.+It can go for days\n" +
      "without eating a\n" +
      "single morsel.\fIn the bulb on\n" +
      "its back, it\n" +
      "stores energy.+The seed on its\n" +
      "back is filled\n" +
      "with nutrients.\fThe seed grows\n" +
      "steadily larger as\n" +
      "its body grows.+It carries a seed\n" +
      "on its back right\n" +
      "from birth. As it\fgrows older, the\n" +
      "seed also grows\n" +
      "larger.+While it is young,\n" +
      "it uses the\n" +
      "nutrients that are\fstored in the\n" +
      "seeds on its back\n" +
      "in order to grow.+BULBASAUR can be seen napping in\n" +
      "bright sunlight.\n" +
      "There is a seed on its back.\fBy soaking up the sun’s rays, the seed\n" +
      "grows progressively larger.+BULBASAUR can be seen napping in\n" +
      "bright sunlight.\n" +
      "There is a seed on its back.\fBy soaking up the sun’s rays, the seed\n" +
      "grows progressively larger.+BULBASAUR can be seen napping in bright\n" +
      "sunlight. There is a seed on its back.\n" +
      "By soaking up the sun’s rays, the seed\n" +
      "grows progressively larger.",
  },
];

export const PokemonContext = React.createContext();

const initialState = {
  pokemonName: "bulbasaur",
  pokemonUrl: "https://pokeapi.co/api/v2/pokemon/1/",
  pokemonData: pokemonSampleData[0],
  toggleInfo: false,
  pokemonArray: [],
};

const ACTIONS = {
  GET_DATA_API: "GET-POKEMON-DATA-FROM-API",
  TOGGLE_BTN_INFO: "SHOW-INFO-SECTION",
  RANDOMISE_POKEMON: "RANDOMISE_POKEMON",
};

const randomPokemonFromArr = (state) => {
  const { pokemonArray } = state;
  const randomPokemon =
    pokemonArray[Math.floor(Math.random() * pokemonArray.length)];

  return randomPokemon;
};

const reducer = (state, action) => {
  if (action.type === ACTIONS.GET_DATA_API) {
    const pokemonRandom = randomPokemonFromArr(state);

    return {
      ...state,
      pokemonName: pokemonRandom.name,
      pokemonUrl: pokemonRandom.url,
    };
  }
  if (action.type === ACTIONS.TOGGLE_BTN_INFO) {
    return {
      ...state,
      toggleInfo: !state.toggleInfo,
    };
  }

  return state;
};

export const PokemonProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const globalContextValues = {
    dispatch,
    ACTIONS,
    state,
  };

  return (
    <PokemonContext.Provider value={globalContextValues}>
      {children}
    </PokemonContext.Provider>
  );
};
