import { all, fork } from "redux-saga/effects";
import { recipeSagaWatcher } from "./recipe.saga";

export default function* rootSaga() {
  yield all([fork(recipeSagaWatcher)]);
}
