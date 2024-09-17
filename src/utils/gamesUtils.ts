import { Game } from "../types/model/Game";

const filterGamesByQuery = (games: Game[], query: string): Game[] => {
  return games.filter((game) => game.name.toLowerCase().includes(query.toLowerCase()));
};

const filterGamesByCategoryId = (games: Game[], categories: string[]): Game[] => {
  return games.filter((game) => {
    let hasCategory = false;

    game.categories.forEach((category) => {
      if (categories.indexOf(category) !== -1) {
        hasCategory = true;
      }
    });

    return hasCategory;
  });
};

const filterGames = (games: Game[], query: string, categories: string[]): Game[] => {
  let listOfGames: Game[] = games;

  if (categories.length > 0) {
    listOfGames = filterGamesByCategoryId(listOfGames, categories);
  }

  if (query) {
    listOfGames = filterGamesByQuery(listOfGames, query);
  }

  return listOfGames;
};

export { filterGames, filterGamesByQuery };
