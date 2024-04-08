import { createSelector } from "reselect";

const recipeSelector = (state: any) => state.recipe;

export const recipeSelectorData = createSelector(recipeSelector, (data) => {
  if (data) {
    return data.recipeList;
  }
  return [];
});

export const recipeDetailSelectorData = createSelector(
  recipeSelector,
  (data) => {
    if (data) {
      return data.recipeDetial;
    }
    return [];
  }
);
