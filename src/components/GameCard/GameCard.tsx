import { Game } from "../../types/model/Game";
import { TbRating18Plus } from "react-icons/tb";
import "./GameCard.css";
import { NavLink } from "react-router-dom";

const GameCard = ({ game }: { game: Game }) => {

  const playGame = () => {
    alert(`you are about to play game ${game.server_game_id}`);
  };

  return (
    <div className="game-card border rounded overflow-hidden">
      <div className="relative w-full h-full">
        <img src={game.icon_2} alt={game.name} />
        <div className="game-card-name flex justify-center items-center p-1">
          <NavLink to={`/games/${game.id}`} className="font-bold text-center hover:text-yellow-500">{game.name} {game.has_age_restriction ? <TbRating18Plus className="inline-block text-red-500" />: false}</NavLink>
        </div>
        <div className="game-card-actions">
          <div className="flex flex-col justify-center p-4 h-full">
            <button type="button" onClick={playGame} className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Play</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
