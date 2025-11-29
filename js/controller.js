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



const init = function () {
  pokemonView.addHandlerClick(controlRandomPokemon);
};
init();
