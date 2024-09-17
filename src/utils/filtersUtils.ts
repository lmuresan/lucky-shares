import { Game, GameCategory } from "../types/model/Game";

const extractCategoriesFromListOfGames = (games: Game[]): GameCategory[] => {
  const categories = games.reduce((acc: GameCategory[], game) => {
    const gameCategories = game.cats;

    return [...acc, ...gameCategories];
  }, []);

  const seenTitles: { [key: string]: boolean } = {};
  const uniqueCategories: GameCategory[] = [];

  categories.forEach(category => {
    if (!seenTitles[category.id]) {
      seenTitles[category.id] = true;
      uniqueCategories.push(category);
    }
  });

  return uniqueCategories;
}

export {extractCategoriesFromListOfGames};
