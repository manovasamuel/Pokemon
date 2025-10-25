"use strict";

// Documentation
/*
  This script fetches and displays random Pokémon data from the PokeAPI.
  It includes error handling and updates various DOM elements with the Pokémon's
  name, image, height, weight, ability, and number of moves.
  It also includes a button to fetch a new random Pokémon.
  The script also includes a random number generator for selecting Pokémon IDs.

*/

// Select DOM elements once
const pokemonNameEl = document.querySelector(".pok-name");
const pokContainerEl = document.querySelector(".img-container");
const pokemonBtn = document.querySelector(".ran");
const typeEl = document.querySelector(".type");
const heightEl = document.querySelector(".height");
const weightEl = document.querySelector(".weight");
const abilityEl = document.querySelector(".ability");
const movesEl = document.querySelector(".moves");

const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const randomPokemon = function () {
  const randomId = random(1, 1025);
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
    .then((res) => {
      if (!res.ok) throw new Error(`Pokémon not found (${res.status})`);
      return res.json();
    })
    .then((data) => {
      pokemonNameEl.textContent = data.name;
      pokContainerEl.innerHTML = `<img src="${data.sprites.front_default}" alt="${data.name}">`;
      typeEl.textContent = `Type: ${data.types[0].type.name}`;
      heightEl.textContent = `Height: ${data.height / 10} m`;
      weightEl.textContent = `Weight: ${data.weight / 10} kg`;
      abilityEl.textContent = `Ability: ${data.abilities[0].ability.name}`;
      movesEl.textContent = `Move: ${data.moves.length}`;
    })
    .catch((err) => {
      console.error(err);
      pokemonNameEl.textContent = `(${err.message}😒)`;
      // Clear other fields on error
      pokContainerEl.innerHTML = "";
      heightEl.textContent = "";
      weightEl.textContent = "";
      abilityEl.textContent = "";
      movesEl.textContent = "";
    });
};

// Add event listener to the button
pokemonBtn.addEventListener("click", randomPokemon);

