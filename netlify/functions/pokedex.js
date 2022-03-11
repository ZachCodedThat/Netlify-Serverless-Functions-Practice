const fetch = require("node-fetch");

exports.handler = async function () {
  const POKE_API = "https://pokeapi.co/api/v2/pokedex/kanto";

  const response = await fetch(POKE_API);

  const data = await response.json();

  const pokemons = await data.pokemon_entries.map((pokemon) => {
    const pokemonImages = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.entry_number}.png`;

    return {
      name: pokemon.pokemon_species.name,
      url: pokemon.pokemon_species.url,
      id: pokemon.entry_number,
      image: pokemonImages,
    };
  });

  return {
    statusCode: 200,
    body: JSON.stringify(pokemons),
  };
};
