import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../types/store/State";
import { useEffect } from "react";
import { getGamesAction, getGameSelector, getGamesSelector } from "../store/features/games/Games";
import { useNavigate, useParams } from "react-router-dom";

const GameView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const game = useSelector((state: StateType) => getGameSelector(state, id || ""));
  const { isLoading } = useSelector(getGamesSelector);

  useEffect(() => {
    dispatch(getGamesAction());
  }, []);

  const { name, provider_title, background, icon_2, icon_3, cats, ratio } = game || {};

  return (
    <div>
      {isLoading && <div className="text-center">Loading...</div>}

      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="flex items-center mb-6">
          <button
            onClick={() => navigate("/games")}
            className="text-blue-500 hover:text-blue-700 font-semibold text-lg mr-4"
          >
            &larr; Back
          </button>
          <div className="flex justify-between items-center w-full">
            <h1 className="text-3xl font-bold">{name}</h1>
            <span className="text-lg font-semibold">{provider_title}</span>
          </div>
        </div>
        <div className="mb-6">
          <img src={background} alt="Game Background" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div className="flex gap-4 mb-6">
          <img src={icon_2} alt="Game Icon 2" className="w-16 h-16 rounded-lg shadow-md" />
          <img src={icon_3} alt="Game Icon 3" className="w-16 h-16 rounded-lg shadow-md" />
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Categories:</h2>
          <ul className="list-disc list-inside">
            {game?.cats.map((cat) => (
              <li key={cat.id} className="text-lg">
                {cat.title}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Aspect Ratio:</h2>
          <p className="text-lg">{ratio}</p>
        </div>
      </div>
    </div>
  );
};

export default GameView;
