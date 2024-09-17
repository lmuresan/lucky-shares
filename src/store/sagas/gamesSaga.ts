import axios, { AxiosResponse } from "axios";
import { put, takeLatest } from "redux-saga/effects";
import { getGamesErrorAction, getGamesSuccessAction } from "../features/games/Games";
import { Game } from "../../types/model/Game";
import { GET_GAMES } from "../../types/store/GameSlice";
import { API_URL } from "../../constants/api";

// Generator function
function* getGamesSaga() {
  try {
    // API call to get the list of games
    const response: AxiosResponse<Game[]> = yield axios.get(`${API_URL}/games`);
    yield put(getGamesSuccessAction(response.data));
  } catch (error) {
    yield put(getGamesErrorAction(error instanceof Error ? error.message : String(error)));
  }
}

// Generator function
export function* watchGetGames() {
  yield takeLatest(GET_GAMES, getGamesSaga);
}
