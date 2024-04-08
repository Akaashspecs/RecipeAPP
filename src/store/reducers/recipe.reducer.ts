import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  recipeList: [];
  recipeDetial: {};
  totalList: number;
}

const initialState: CounterState = {
  recipeList: [],
  recipeDetial: {},
  totalList: 0,
};

const recipeSlice = createSlice({
  name: "RecipeReducer",
  initialState,
  reducers: {
    setRecipeList: (state, action: PayloadAction<any>) => {
      state.recipeList = action.payload;
    },
    setRecipeDetail: (state, action: PayloadAction<any>) => {
      state.recipeDetial = action.payload;
    },
    setTotalRecipeRecord: (state, action: PayloadAction<any>) => {
      state.totalList = action.payload;
    },
  },
});

export const { setRecipeList, setRecipeDetail, setTotalRecipeRecord } =
  recipeSlice.actions;
export default recipeSlice.reducer;
