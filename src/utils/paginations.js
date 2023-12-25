const paginatePokemon = (pokemons, currenPage) => {
  //? Cantidad de pokemons por pagina
  const POKEMONS_PER_PAGE = 20;

  //? los pokemons que se van renderizar al la pagina actual
  const sliceEnd = currenPage * POKEMONS_PER_PAGE;
  const sliceStart = sliceEnd - POKEMONS_PER_PAGE;
  const pokemonsInCurrentPage = pokemons.slice(sliceStart, sliceEnd);

  //? Ultima pagina o la cantidad de paginas
  const lastPage = Math.ceil(pokemons.length / POKEMONS_PER_PAGE);

  //? Bloque actual
  const PAGES_PER_BLOCK = 7;
  const actualBlack = Math.ceil(currenPage / PAGES_PER_BLOCK);

  //? Paginas que se van a mostrar en el bloque actual
  const pagesInCurrenBlock = [];
  const maxPage = actualBlack * PAGES_PER_BLOCK;
  const minPage = maxPage - PAGES_PER_BLOCK + 1;
  for (let i = minPage; i <= maxPage; i++) {
    if (i <= lastPage) {
      pagesInCurrenBlock.push(i);
    }
  }

  return {
    pokemonsInCurrentPage,
    lastPage,
    pagesInCurrenBlock
  }
};

export { paginatePokemon };
