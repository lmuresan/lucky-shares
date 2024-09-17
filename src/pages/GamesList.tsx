import GameCard from "../components/GameCard/GameCard";
import GameFilters from "../components/GameFilters/GameFilters";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../types/store/State";
import { useEffect } from "react";
import { getGamesAction, getGamesSelector } from "../store/features/games/Games";
import { filterGames } from "../utils/gamesUtils";
import { Game } from "../types/model/Game";

const GamesList = () => {
  const {data , isLoading} = useSelector(getGamesSelector);
  const {query, categories} = useSelector((state: StateType) => state.filters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGamesAction());
  }, []);

  const renderGames = (listOfGames: Game[], searchQuery: string, categories: string[]) => {
    const filteredGames = filterGames(listOfGames, searchQuery, categories);

    if (filteredGames.length === 0) {
      return <div className="text-center">No games found</div>;
    }

    return filteredGames.map((game) => <GameCard key={game.id} game={game}/>);
  };

  return (
    <div>
      <GameFilters />

      {isLoading && <div className="text-center">Loading...</div>}

      <div className="p-2 flex items-start justify-center flex-wrap gap-3">
        {data && renderGames(data, query, categories)}
      </div>
    </div>
  );
}

export default GamesList;
