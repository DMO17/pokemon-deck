// import axios from "axios";

const axios = require("axios");

const randomPokemon = async () => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=1000";
  const { data } = await axios.get(url);

  const pokemonArray = data.results;

  const randomPokemon =
    pokemonArray[Math.floor(Math.random() * pokemonArray.length)];

  return randomPokemon;
};

const fetchPokemonData = async () => {
  const { url } = await randomPokemon();

  const { data: generalPokemonInfo } = await axios.get(url);

  // const { data: advancedPokemonInfo } = await axios.get(
  //   generalPokemonInfo.species?.url
  // );

  // console.log(advancedPokemonInfo);

  const obj = {
    id: generalPokemonInfo.id,
    type: generalPokemonInfo.types[0]?.type?.name,
    img: generalPokemonInfo.sprites?.other["official-artwork"].front_default,
    height: generalPokemonInfo.height,
    weight: generalPokemonInfo.weight,
    baseExp: generalPokemonInfo.base_experience,
    abilities: generalPokemonInfo.abilities?.map((each) => {
      return each.ability?.name;
    }),
    stats: generalPokemonInfo.stats?.map((each) => {
      return { name: each?.stat?.name, strength: each?.base_stat };
    }),
  };

  // console.log(obj);
};

// fetchPokemonData();
//
//
