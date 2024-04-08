import axios from "axios";
import { recipeListActionType } from "../store/actions/RecipeList.actions";

export const getRecipes = async (show: recipeListActionType) => {
  const data = axios
    .get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=354fa15192414a89a615c6858be9e3a8&cuisine=${show.cuisine}&query=${show.query}&offset=${show.offset}&addRecipeInformation=true`
    )
    .then((res) => res.data);

  return data;
};

export const getReipeDetail = async (data: any) => {
  const datas = axios
    .get(
      `https://api.spoonacular.com/recipes/${data.id}/information?apiKey=354fa15192414a89a615c6858be9e3a8&includeNutrition=true`
    )
    .then((res) => res.data);

  return datas;
};
