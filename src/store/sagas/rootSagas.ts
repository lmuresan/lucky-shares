import { all, fork } from "redux-saga/effects";
import { watchGetGames } from "./gamesSaga";

const rootSaga = function* () {
  yield all([
    fork(watchGetGames),
  ]);
};

export default rootSaga;
