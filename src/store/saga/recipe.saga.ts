import * as types from "../../constants/ActionTypes";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  setRecipeList,
  setRecipeDetail,
  setTotalRecipeRecord,
} from "../reducers/recipe.reducer";
import { getRecipes, getReipeDetail } from "../../api/RecipeList";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function* recipeFetchListSaga(action: any): any {
  try {
    const response = yield call(getRecipes, action.payload);
    yield put(setRecipeList(response["results"]));
    yield put(setTotalRecipeRecord(response["totalResults"]));
  } catch (e: any) {
    toast.error("Something Went Wrong");
  }
}

function* fetchRecipeDetailSaga(action: any): any {
  try {
    const response = yield call(getReipeDetail, action.payload);

    yield put(setRecipeDetail(response));
  } catch (e: any) {
    toast.error("Something Went Wrong");
  }
}

export function* recipeSagaWatcher() {
  yield all([takeLatest(types.ADD_RECIPE_LIST, recipeFetchListSaga)]);
  yield all([takeLatest(types.ADD_RECIPE_DETAIL, fetchRecipeDetailSaga)]);
}
