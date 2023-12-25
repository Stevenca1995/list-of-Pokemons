import { useDispatch } from "react-redux";
import { setTrainerName } from "../store/slices/trainerName.slice";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setTrainerName(e.target.trainerName.value));
    navigate("/pokedex");
  };

  return (
    <section className="grid grid-rows-[1fr,_auto] h-screen overflow-hidden font-lato">
      <div className="text-center justify-self-center self-center">
        <main className="p-6">
          <header className="pb-6">
            <img src="/images/pokedex.png" alt="" />
          </header>
          <h3 className="text-red-500 text-2xl font-extrabold sm:text-3xl">Hello trainer!</h3>
          <p className="pb-6 text-sm font-semibold sm:text-lg">
            Write your name to start
          </p>
          <form onSubmit={handleSubmit} className="grid grid-cols-[1fr,_100px] sm:grid-cols-[1fr,_120px] sm:text-lg">
            <input
              className="bg-white shadow p-2  shadow-slate-400 outline-none rounded-sm"
              name="trainerName"
              placeholder="your name"
              type="text"
              autoComplete="off"
              required
            />
            <button className="bg-red-500 hover:bg-red-400 text-white p-2 shadow shadow-slate-400 rounded-sm" type="submit">
              Start
            </button>
          </form>
        </main>
      </div>
      <Footer />
    </section>
  );
};
export default Home;
