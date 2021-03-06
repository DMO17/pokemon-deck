import axios from "axios";

// const axios = require("axios");

export const getPokemonList = async () => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=1000";
  const { data } = await axios.get(url);
  return data.results;
};

const constructBio = (textArray) => {
  return textArray
    .filter((each) => {
      return each?.language?.name === "en";
    })
    .map((each) => each.flavor_text)
    .slice(0, 9)
    .join("+");
};

export const fetchPokemonData = async (randomPokemonUrl) => {
  const { data: generalPokemonInfo } = await axios.get(randomPokemonUrl);

  const { data: advancedPokemonInfo } = await axios.get(
    generalPokemonInfo.species?.url
  );

  return {
    id: generalPokemonInfo?.id,
    name: generalPokemonInfo?.name,
    type: generalPokemonInfo?.types[0]?.type?.name,
    img: generalPokemonInfo?.sprites?.other["official-artwork"].front_default,
    altImg: generalPokemonInfo?.sprites?.other.home.front_default,
    height: generalPokemonInfo?.height,
    weight: generalPokemonInfo?.weight,
    abilities: generalPokemonInfo?.abilities
      ?.map((each) => {
        return each.ability?.name;
      })
      .join(","),
    genus: advancedPokemonInfo.genera?.find((each) => {
      return each.language?.name === "en";
    }).genus,
    baseExp: generalPokemonInfo?.base_experience,
    baseHappiness: advancedPokemonInfo.base_happiness,
    growthRate: advancedPokemonInfo?.growth_rate.name,
    captureRate: advancedPokemonInfo?.capture_rate,
    stats: generalPokemonInfo?.stats?.map((each) => {
      return { name: each?.stat?.name, strength: each?.base_stat };
    }),
    bio: constructBio(advancedPokemonInfo?.flavor_text_entries),
  };
};

// fetchPokemonData();
