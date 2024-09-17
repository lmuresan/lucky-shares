import { ChangeEvent } from "react";
import "./GameFilters.css";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setQuery } from "../../store/features/filters/Filters";
import { StateType } from "../../types/store/State";
import { extractCategoriesFromListOfGames } from "../../utils/filtersUtils";

const GameFilters = () => {
  const dispatch = useDispatch();
  const {query, categories} = useSelector((state: StateType) => state.filters);
  const {data} = useSelector((state: StateType) => state.games);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuery(e.target.value));
  }

  const onCategoryClick = (categoryId: string) => {
    dispatch(setCategory(categoryId));
  };

  const renderCategories = () => {
    const availableCategories = extractCategoriesFromListOfGames(data || []);

    if (availableCategories.length > 0) {
      return availableCategories.map((category) => (
        <button
          key={category.id}
          className={`text-xs text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded-lg mr-1 ${categories.indexOf(category.id) !== -1 ? "bg-orange-500 text-white" : ""}`}
          onClick={() => onCategoryClick(category.id)}
        >
          {category.title}
        </button>
      ));
    }

    return false;
  };

  return (
    <div className="game-filters flex items-center justify-between p-1 gap-3">
      <div className="game-filters-query">
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search .."
          value={query}
          onChange={onChange}
        />
      </div>
      <div className="flex gap-1 items-center flex-wrap">{renderCategories()}</div>
    </div>
  );
};

export default GameFilters;
