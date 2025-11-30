class FindPokemon {
  #parentElement = document.querySelector(".search-bar");

  getQuery() {
    const query = this.#parentElement.querySelector(".search-poki").value;
    this.#clearInput();
    return query;
  }
  #clearInput() {
    this.#parentElement.querySelector(".search-poki").value = "";
  }
  addHandlerSearch(handler) {
    this.#parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new FindPokemon();
