import { applyMiddleware, combineReducers, createStore } from "redux";
// import ShowReducer from "./reducers/Shows";
import { composeWithDevTools } from "@redux-devtools/extension";
import { takeLatest, takeEvery, all, fork, debounce } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./store/reducers";
import rootSaga from "./store/saga";
// import { SHOWS_QUERY_CHANGE, SINGLE_SHOW_ID_CHANGE } from "./actions/Shows";
// import { fetchShows, fetchSingleShow } from "./sagas/Shows";
// import { fetchCast } from "./sagas/Cast";
// import CastReducer from "./reducers/Casts";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export type State = ReturnType<typeof rootReducer>;

export default store;
