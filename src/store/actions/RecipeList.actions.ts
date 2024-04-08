import * as types from "../../constants/ActionTypes";

export interface recipeListActionType {
  show?: string;
  offset: number;
  number: number;
  query?: string;
  cuisine?: string;
}

interface recipeDetailActionType {
  includeNutrition?: boolean;
  id: string;
}

export const addRecipeList = (data: recipeListActionType) => ({
  type: types.ADD_RECIPE_LIST,
  payload: data,
});

export const addRecipeDetail = (data: recipeDetailActionType) => ({
  type: types.ADD_RECIPE_DETAIL,
  payload: data,
});
