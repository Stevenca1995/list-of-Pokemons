import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { bgType, gradientsByType } from "../constans/pokemon";

const PokemonDetail = () => {
  const [pokemonInfo, setPokemonInfo] = useState(null);
  const { id } = useParams();

  const getPercentBarProgress = (stat_value) => {
    const percent = (stat_value * 100) / 255;
    return percent + "%";
  };

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(({ data }) => setPokemonInfo(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <section>
      <Header />
      <section className="py-24 p-8 sm:py-36">
        <article className="text-center max-w-[450px] mx-auto p-1 border-2">
          <header
            className={`${
              gradientsByType[pokemonInfo?.types[0].type.name]
            } h-[80px] relative mb-4`}
          >
            <img
              src={pokemonInfo?.sprites.other["official-artwork"].front_default}
              alt=""
              className="absolute bottom-0 translate-y-[27%] w-full p-20 sm:p-28"
            />
          </header>
          <div className="relative grid gap-4">
            <span className="border bg-white w-16 mx-auto text-[#416460] font-semibold sm:w-24">
              # {pokemonInfo?.id}
            </span>
            <hr className="mb-4" />
            <h3 className="text-xl capitalize font-bold text-[#416460] absolute left-1/2 -translate-x-1/2 top-[45%] -bottom-3 bg-white w-32 h-8 text-ellipsis overflow-hidden">
              {pokemonInfo?.name}
            </h3>
          </div>
          <div className="grid grid-cols-[60px,_60px] justify-center">
            <div>
              <h5 className="text-sm">Weith</h5>
              <span className="text-lg font-semibold">
                {pokemonInfo?.weight}
              </span>
            </div>
            <div>
              <h5 className="text-sm">Height</h5>
              <span className="text-lg font-semibold">
                {pokemonInfo?.height}
              </span>
            </div>
          </div>
          <div className="p-6 grid gap-3 sm:grid-cols-2">
            <div>
              <h5 className="mb-4 text-xl font-medium">Type</h5>
              <div className="grid grid-cols-2 gap-3">
                {
                  pokemonInfo?.types.map((type) => <span className={`${bgType[type.type.name]} p-1 text-white capitalize font-semibold rounded-sm`} key={type.type.name}>
                    {type.type.name}
                  </span>)
                }
              </div>
            </div>
            <div>
              <h5 className="mb-4 text-xl font-medium">Abilities</h5>
              <div className="grid grid-cols-2 gap-3">
                <span className="bg-white border p-1 capitalize font-semibold rounded-sm text-ellipsis overflow-hidden">{pokemonInfo?.abilities[0].ability.name}</span>
                <span className="bg-white border p-1 capitalize font-semibold rounded-sm text-ellipsis overflow-hidden">{pokemonInfo?.abilities[0].ability.name}</span>
              </div>
            </div>
          </div>
          <section className="p-4 relative">
            <h4 className="text-left text-xl font-semibold absolute top-0 bottom-0 bg-white h-7 w-14">
              Stats
            </h4>
            <hr className="mb-7" />
            <div className="absolute -translate-y-[120%] right-3 bg-white">
              <img
                className="w-[40px]"
                src="/images/pokeballdetail.png"
                alt=""
              />
            </div>
            <ul className="grid gap-3">
              {pokemonInfo?.stats.map((stat) => (
                <li key={stat.stat.name}>
                  <div className="flex justify-between">
                    <h5 className="capitalize">{stat.stat.name}</h5>
                    <span>{stat.base_stat}/255</span>
                  </div>
                  {/* Barra de progreso */}
                  <div className="h-6 bg-slate-200 rounded-sm overflow-hidden">
                    {/* Progreso sobre el total */}
                    <div
                      style={{
                        width: getPercentBarProgress(stat.base_stat),
                      }}
                      className="h-full bg-gradient-to-r from-orange-500 to-yellow-400"
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </article>
      </section>
    </section>
  );
};
export default PokemonDetail;
