import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addRecipeDetail } from "../store/actions/RecipeList.actions";
import { recipeDetailSelectorData } from "../store/selector/recipe.selector";
import Breadcrumbs from "../pureComponents/BreadCrumbs";
import "./RecipeList.css";
import { breadcrumbs } from "../utils/helpers";
import RecipeProcedure from "./RecipeProcedure";
import RecipeDescription from "./RecipeDescription";

type RecipeDetailtType = {
  id: number;
  title: string;
  image: string;
  summary: string;
  nutrition: {
    ingredients: {
      name: string;
    }[];
  };
  analyzedInstructions: {
    steps: {
      step: string;
    }[];
  }[];
};

function RecipeDetail() {
  const params = useParams();

  const dispatch = useDispatch();
  const recipeDetailData: RecipeDetailtType = useSelector(
    recipeDetailSelectorData
  );

  useEffect(() => {
    if (params.id) {
      dispatch(
        addRecipeDetail({
          includeNutrition: true,
          id: params.id as string,
        })
      );
    }
  }, [params.id]);

  return (
    <div className="no-scroll  bg-slate-100 py-12 px-3 md:px12 m-12 overflow-y-scroll relative ">
      <Breadcrumbs breadcrumbDetail={breadcrumbs} />

      {recipeDetailData && (
        <div>
          <RecipeDescription
            image={recipeDetailData.image}
            title={recipeDetailData.title}
            summary={recipeDetailData.summary}
          />

          <RecipeProcedure
            nutrition={recipeDetailData.nutrition}
            analyzedInstructions={recipeDetailData.analyzedInstructions}
          />
        </div>
      )}
    </div>
  );
}

export default RecipeDetail;
