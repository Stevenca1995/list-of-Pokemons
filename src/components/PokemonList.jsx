import { useEffect, useState } from "react";
import { paginatePokemon } from "../utils/paginations";
import Pagination from "./Pagination";
import PokemonPreview from "./PokemonPreview";

const PokemonList = ({ pokemons }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { pokemonsInCurrentPage, lastPage, pagesInCurrenBlock } =
    paginatePokemon(pokemons, currentPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [pokemons]);
  return (
    <section>
      <section className="grid gap-5 grid-cols-[repeat(auto-fill,_270px)] justify-center max-w-[1200px] mx-auto py-6">
        {pokemonsInCurrentPage.map((pokemon) => (
          <PokemonPreview key={pokemon.url} pokemonUrl={pokemon.url} />
        ))}
      </section>
      <Pagination
        lastPage={lastPage}
        pagesInCurrenBlock={pagesInCurrenBlock}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </section>
  );
};
export default PokemonList;
