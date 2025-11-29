import { getJSon } from "./helper.js";
import { API_URL } from "./config.js";

export const state = {
  pokemon: {},
};
const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const createPokemon = function (data) {
  const pokemon = data;
  return {
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
  const data = await getJSon(`${API_URL}${randomId}`);

  state.pokemon = createPokemon(data);
};

export const loadPokemon = async function (query) {
  const data = await getJSon(`${API_URL}${query.toLowerCase()}`);

  state.pokemon = createPokemon(data);
};
