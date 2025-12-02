import { getJSon } from "./helper.js";
import { API_URL } from "./config.js";

export const state = {
  pokemon: {},
  search: {
    query: "",
  },
  favorites: [],
};
const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const createPokemon = function (data) {
  const pokemon = data;
  return {
    id: pokemon.id,
    name: pokemon.name,
    image: pokemon.sprites.front_default,
    type: pokemon.types[0].type.name,
    height: pokemon.height / 10,
    weight: pokemon.weight / 10,
    ability: pokemon.abilities[0].ability.name,
    moves: pokemon.moves.length,
  };
};

export const randomPokemon = async function () {
  const randomId = random(1, 1025);
  try {
    const data = await getJSon(`${API_URL}${randomId}`);
    state.pokemon = createPokemon(data);
  } catch (err) {
    throw err;
  }
};

export const searchPokemon = async function (query) {
  state.search.query = query;
  try {
    const data = await getJSon(`${API_URL}${query}`);
    state.pokemon = createPokemon(data);
  } catch (err) {
    throw err;
  }
};
