const axios = require("axios");

const randomPokemon = async () => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=1000";
  const { data } = await axios.get(url);

  const pokemonArray = data.results;

  const randomPokemon =
    pokemonArray[Math.floor(Math.random() * pokemonArray.length)];

  return randomPokemon;
};

randomPokemon();
