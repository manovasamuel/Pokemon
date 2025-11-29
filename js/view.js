class PokemonView {
  #parentElement = document.querySelector(".card");
  #btn = document.querySelector(".ran");
  #errorMessage = "We could not find that Pokémon. Please try again!";
  #data;

  render(data) {
    this.#data = data;
    const markup = this.#generateMarkup();
    this.#clear();
    this.#parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderSpinner() {
    const markup = `
      <div class="spinner"></div>
    `;
    this.#clear();
    this.#parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderError(message = this.#errorMessage) {
    const markup = `
      <div class="error">${message}</div>
    `;
    this.#clear();
    this.#parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  addHandlerClick(handler) {
    this.#btn.addEventListener("click", handler);
  }

  #clear() {
    this.#parentElement.innerHTML = "";
  }

  #generateMarkup() {
    return `
        <h1 class="pok-name">${this.#data.name}</h1>
        <div class="img-container">
            <img src="${this.#data.image}" alt="${this.#data.name}">
        </div>
        <div class="stats">
          <p class="type">Type: ${this.#data.type}</p>
          <p class="height">Height: ${this.#data.height} m</p>
          <p class="weight">Weight: ${this.#data.weight} kg</p>
          <p class="ability">Ability: ${this.#data.ability}</p>
          <p class="moves">Moves: ${this.#data.moves}</p>
        </div>
    `;
  }
}

export default new PokemonView();
