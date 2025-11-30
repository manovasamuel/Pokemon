import * as model from "./model.js";
import pokemonView from "./view.js";
import findpokemon from "./searchView.js";

const controlRandomPokemon = async function (e) {
  e.preventDefault();
  try {
    pokemonView.renderSpinner();

    await model.randomPokemon();

    pokemonView.render(model.state.pokemon);
  } catch (err) {
    console.error(`💥 ${err}`);
    pokemonView.renderError();
  }
};

const controlSearchResults = async function (query) {
  try {
    const query = findpokemon.getQuery();
    if (!query) return pokemonView.renderError("Please enter a Pokémon!");

    pokemonView.renderSpinner();

    await model.searchPokemon(query);

    pokemonView.render(model.state.pokemon);
    console.log(model.state.pokemon);
  } catch (err) {
    console.error(`💥 ${err}`);
    pokemonView.renderError();
  }
};

const init = function () {
  pokemonView.addHandlerClick(controlRandomPokemon);
  findpokemon.addHandlerSearch(controlSearchResults);
};
init();
