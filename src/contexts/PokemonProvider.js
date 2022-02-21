import React, { useReducer } from "react";
import { randomPokemon } from "../service/PokemonApi";
// import axios from "axios";

const pokemonListOfNames = [
  {
    name: "bulbasaur",
    url: "https://pokeapi.co/api/v2/pokemon/1/",
  },
  {
    name: "ivysaur",
    url: "https://pokeapi.co/api/v2/pokemon/2/",
  },
  {
    name: "venusaur",
    url: "https://pokeapi.co/api/v2/pokemon/3/",
  },
];

const pokemonSampleData = [
  {
    id: 2,
    name: "ivysaur",
    type: "grass",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
    height: 10,
    weight: 130,
    abilities: "overgrow,chlorophyll",
    genus: "Seed Pokémon",
    baseExp: 142,
    baseHappiness: 50,
    growthRate: "medium-slow",
    captureRate: 45,
    stats: [
      { name: "hp", strength: 60 },
      { name: "attack", strength: 62 },
      { name: "defense", strength: 63 },
      { name: "special-attack", strength: 80 },
      { name: "special-defense", strength: 80 },
      { name: "speed", strength: 60 },
    ],
    bio:
      "When the bulb on\n" +
      "its back grows\n" +
      "large, it appears\fto lose the\n" +
      "ability to stand\n" +
      "on its hind legs.+When the bulb on\n" +
      "its back grows\n" +
      "large, it appears\fto lose the\n" +
      "ability to stand\n" +
      "on its hind legs.+The bulb on its\n" +
      "back grows by\n" +
      "drawing energy.\fIt gives off an\n" +
      "aroma when it is\n" +
      "ready to bloom.+Exposure to sun­\n" +
      "light adds to its\n" +
      "strength. Sunlight\falso makes the bud\n" +
      "on its back grow\n" +
      "larger.+If the bud on its\n" +
      "back starts to\n" +
      "smell sweet, it\fis evidence that\n" +
      "the large flower\n" +
      "will soon bloom.+The bulb on its\n" +
      "back grows as it\n" +
      "absorbs nutrients.\fThe bulb gives off\n" +
      "a pleasant aroma\n" +
      "when it blooms.+There is a bud on this POKéMON’s back.\n" +
      "To support its weight, IVYSAUR’s legs\n" +
      "and trunk grow thick and strong.\fIf it starts spending more time lying\n" +
      "in the sunlight, it’s a sign that the\n" +
      "bud will bloom into a large flower soon.+There is a bud on this POKéMON’s back.\n" +
      "To support its weight, IVYSAUR’s legs\n" +
      "and trunk grow thick and strong.\fIf it starts spending more time lying\n" +
      "in the sunlight, it’s a sign that the\n" +
      "bud will bloom into a large flower soon.+To support its bulb, IVYSAUR’s legs\n" +
      "grow sturdy. If it spends more time lying in\n" +
      "the sunlight, the bud will soon bloom into\n" +
      "a large flower.",
  },
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
  {
    id: 3,
    name: "venusaur",
    type: "grass",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
    height: 20,
    weight: 1000,
    abilities: "overgrow,chlorophyll",
    genus: "Seed Pokémon",
    baseExp: 263,
    baseHappiness: 50,
    growthRate: "medium-slow",
    captureRate: 45,
    stats: [
      { name: "hp", strength: 80 },
      { name: "attack", strength: 82 },
      { name: "defense", strength: 83 },
      { name: "special-attack", strength: 100 },
      { name: "special-defense", strength: 100 },
      { name: "speed", strength: 80 },
    ],
    bio:
      "The plant blooms\n" +
      "when it is\n" +
      "absorbing solar\fenergy. It stays\n" +
      "on the move to\n" +
      "seek sunlight.+The plant blooms\n" +
      "when it is\n" +
      "absorbing solar\fenergy. It stays\n" +
      "on the move to\n" +
      "seek sunlight.+The flower on its\n" +
      "back catches the\n" +
      "sun's rays.\fThe sunlight is\n" +
      "then absorbed and\n" +
      "used for energy.+By spreading the\n" +
      "broad petals of\n" +
      "its flower and\fcatching the sun's\n" +
      "rays, it fills its\n" +
      "body with power.+It is able to con­\n" +
      "vert sunlight into\n" +
      "energy. As a\fresult, it is more\n" +
      "powerful in the\n" +
      "summertime.+As it warms it­\n" +
      "self and absorbs\n" +
      "the sunlight, its\fflower petals\n" +
      "release a pleasant\n" +
      "fragrance.+There is a large flower on VENUSAUR’s\n" +
      "back. The flower is said to take on vivid\n" +
      "colors if it gets plenty of nutrition\fand sunlight. The flower’s aroma\n" +
      "soothes the emotions of people.+There is a large flower on VENUSAUR’s\n" +
      "back. The flower is said to take on vivid\n" +
      "colors if it gets plenty of nutrition\fand sunlight. The flower’s aroma\n" +
      "soothes the emotions of people.+VENUSAUR’s flower is said to take on vivid\n" +
      "colors if it gets plenty of nutrition and\n" +
      "sunlight. The flower’s aroma soothes the\n" +
      "emotions of people.",
  },
];

export const PokemonContext = React.createContext();

const initialState = {
  pokemonName: "bulbasaur",
  pokemonUrl: "https://pokeapi.co/api/v2/pokemon/1/",
  pokemonData: pokemonSampleData[1],
  toggleInfo: false,
  test: [],
};

const ACTIONS = {
  GET_DATA_API: "GET-POKEMON-DATA-FROM-API",
  TOGGLE_BTN_INFO: "SHOW-INFO-SECTION",
  TESTING: "TEST",
};

const randomPokemons = () => {
  const randomPokemon =
    pokemonListOfNames[Math.floor(Math.random() * pokemonListOfNames.length)];

  return randomPokemon;
};

const reducer = (state, action) => {
  if (action.type === ACTIONS.GET_DATA_API) {
    // const poke = await randomPokemon();
    const pokemonRandom = randomPokemons();
    const matchData = pokemonSampleData.find((each) => {
      return each.name === pokemonRandom.name;
    });
    return {
      ...state,
      pokemonName: pokemonRandom.name,
      pokemonUrl: pokemonRandom.url,
      pokemonData: matchData,
      // test: poke,
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
  const [state, dispatch, pokemonListOfNames] = useReducer(
    reducer,
    initialState
  );

  const globalContextValues = { dispatch, ACTIONS, state, randomPokemon };

  return (
    <PokemonContext.Provider value={globalContextValues}>
      {children}
    </PokemonContext.Provider>
  );
};
