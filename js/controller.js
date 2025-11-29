import * as model from "./model.js";
import pokemonView from "./view.js";
import searchView from "./searchView.js";

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

const controlSearchResults = async function () {
  try {
    const query = searchView.getQuery();
    if (!query) return;

    pokemonView.renderSpinner();
    await model.loadPokemon(query);
    pokemonView.render(model.state.pokemon);
  } catch (err) {
    pokemonView.renderError(`No Pokémon found. Please try again!`);
  }
};

const init = function () {
  pokemonView.addHandlerClick(controlRandomPokemon);
  searchView.addHandlerSearch(controlSearchResults);
};
init();
