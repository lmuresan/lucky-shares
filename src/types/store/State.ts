import { IGameState } from "./GameSlice";
import { IFilterState } from "./FilterSlice";

export type StateType = {
  games: IGameState;
  filters: IFilterState;
};
