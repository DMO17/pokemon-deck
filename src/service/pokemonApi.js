// import axios from "axios";

const axios = require("axios");

const constructBio = (textArray) => {
  return textArray
    .filter((each) => {
      return each?.language?.name === "en";
    })
    .map((each) => each.flavor_text)
    .slice(0, 9)
    .join("+");
};

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

  const { data: advancedPokemonInfo } = await axios.get(
    generalPokemonInfo.species?.url
  );

  const obj = {
    id: generalPokemonInfo.id,
    type: generalPokemonInfo.types[0]?.type?.name,
    img: generalPokemonInfo.sprites?.other["official-artwork"].front_default,
    height: generalPokemonInfo.height,
    weight: generalPokemonInfo.weight,
    abilities: generalPokemonInfo.abilities?.map((each) => {
      return each.ability?.name;
    }),
    genus: advancedPokemonInfo.genera?.find((each) => {
      return each.language?.name === "en";
    }).genus,
    baseExp: generalPokemonInfo.base_experience,
    baseHappiness: advancedPokemonInfo.base_happiness,
    baseExp: generalPokemonInfo.base_experience,
    growthRate: advancedPokemonInfo?.growth_rate.name,
    captureRate: advancedPokemonInfo.capture_rate,
    stats: generalPokemonInfo.stats?.map((each) => {
      return { name: each?.stat?.name, strength: each?.base_stat };
    }),
    bio: constructBio(advancedPokemonInfo?.flavor_text_entries),
  };

  console.log(obj);
};

// fetchPokemonData();
