import { FC } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { TbPointFilled } from "react-icons/tb";

type RecipeProceduretType = {
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

const RecipeProcedure: FC<RecipeProceduretType> = ({
  nutrition,
  analyzedInstructions,
}) => {
  return (
    <div className="flex flex-col md:flex-row mt-6">
      <div className=" border border-slate-300 rounded-lg p-6">
        <div className="text-xl font-medium">Ingredients</div>
        <div className="mt-3">
          {nutrition?.ingredients?.map((item) => (
            <div className="flex">
              <IoIosArrowForward className=" self-center" />
              {item.name}
            </div>
          ))}
        </div>
        <div />
      </div>
      <div className="w-full md:w-3/4 mt-5 md:mt-0 md:ml-6 border border-slate-300 rounded-lg p-6">
        <div className="text-xl font-medium">Instructions</div>
        <div className="mt-3">
          {analyzedInstructions?.map((item, index: number) => (
            <div className="">
              <div className=" font-medium my-2">{index + 1} Procedure</div>
              {item.steps.map((data) => (
                <div className="flex">
                  <TbPointFilled className="mt-1 mr-3" />
                  {data.step}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div />
      </div>
    </div>
  );
};

export default RecipeProcedure;
