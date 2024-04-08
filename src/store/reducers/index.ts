import { combineReducers } from "redux";

import recipeSlice from "./recipe.reducer";

const rootReducer = combineReducers({
  recipe: recipeSlice,
});

export default rootReducer;
