import { Game } from "../model/Game";

export type IGameState = {
  data: Game[] | null;
  isLoading: boolean;
  errors: string;
}

// The users global state
export type GameStateType = {
  game: IGameState,
}

export const GAMES = "games";
export type GAMES = typeof GAMES;

export const GET_GAMES = `${GAMES}/getGamesAction`;
export type GET_GAMES = typeof GET_GAMES;
