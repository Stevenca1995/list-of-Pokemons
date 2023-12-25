import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PokemonList from "../components/PokemonList";
import Header from "../components/Header";

const Pokedex = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [types, setTypes] = useState([]);

  const trainerName = useSelector((store) => store.trainerName.name);

  const pokemonsByName = allPokemons.filter((pokemon) =>
    pokemon.name.includes(pokemonName)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setPokemonName(e.target.pokemonName.value.toLowerCase().trim());
  };

  const handleChangeType = (e) => {
    const url = e.target.value;
    axios
      .get(url)
      .then(({ data }) => {
        if (url.includes("type")) {
          //? Obtuvimos pokemos por tipo
          const pokemonsFormat = data.pokemon.map((pokemon) => pokemon.pokemon);
          setAllPokemons(pokemonsFormat);
        } else {
          //? Obtuvimos todos los pokemos
          setAllPokemons(data.results);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=1292")
      .then(({ data }) => setAllPokemons(data.results))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/type")
      .then(({ data }) => setTypes(data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section>
      <Header />
      <main className="font-lato">
        <div className="p-4 max-w-[1200px] mx-auto py-6">
          <p className="px-6 mb-4">
            <b className="capitalize text-red-500">Welcome {trainerName}</b>,
            herecan you find favorite Pokemon
          </p>
          <form
            className="grid gap-6 px-6 sm:flex sm:justify-between"
            onSubmit={handleSubmit}
          >
            <div className="sm:grid sm:grid-cols-[250px,_100px]">
              <input
                className="bg-white shadow p-2  shadow-slate-400 outline-none rounded-[3px]"
                name="pokemonName"
                placeholder="Seacrh Pokemon"
                type="text"
                autoComplete="off"
              />
              <button
                className="bg-red-500 hover:bg-red-400 text-white p-2 shadow shadow-slate-400 rounded-sm"
                type="submit"
              >
                Search
              </button>
            </div>
            <select
              className="bg-white shadow p-2 shadow-slate-400 outline-none w-52 rounded-[3px] sm:w-64"
              onChange={handleChangeType}
            >
              <option value="https://pokeapi.co/api/v2/pokemon?limit=1292">
                All pokemos
              </option>
              {types.map((type) => (
                <option value={type.url} className="capitalize" key={type.name}>
                  {type.name}
                </option>
              ))}
            </select>
          </form>
        </div>

        <PokemonList pokemons={pokemonsByName} />
      </main>
    </section>
  );
};
export default Pokedex;
