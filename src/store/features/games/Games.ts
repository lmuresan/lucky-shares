import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Game } from '../../../types/model/Game';
import { GAMES, IGameState } from '../../../types/store/GameSlice';

const initialState: IGameState = {
  data: null,
  errors: "",
  isLoading: false,
}

export const gamesSlice = createSlice({
  name: GAMES,
  initialState,
  reducers: {
    getGamesAction: (state: IGameState) => {
      state.isLoading = true;
      state.errors = '';
    },
    getGamesSuccessAction: (state: IGameState, { payload: games }: PayloadAction<Game[]>) => {
      state.isLoading = false;
      state.data = games;
    },
    getGamesErrorAction: (state: IGameState, { payload: error }: PayloadAction<string>) => {
      state.isLoading = false;
      state.errors = error;
    },
  },
})

export const getGamesSelector = (state: { games: IGameState }) => state.games;
export const getGameSelector = (state: { games: IGameState }, gameId: string) => state.games.data?.find((game) => game.id === gameId);

export const { getGamesAction, getGamesSuccessAction, getGamesErrorAction } = gamesSlice.actions;

export default gamesSlice.reducer;
