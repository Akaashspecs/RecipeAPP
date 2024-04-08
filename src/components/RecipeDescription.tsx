import { FC } from "react";

type RecipeDescriptionType = {
  title: string;
  image: string;
  summary: string;
};

const RecipeDescription: FC<RecipeDescriptionType> = ({
  title,
  image,
  summary,
}) => {
  return (
    <div>
      <div className="bg-slate-100  text-4xl font-normal flex justify-center">
        {title}
      </div>
      <div className="flex flex-col xl:flex-row items-center mt-9">
        <div className="flex items-center">
          <img src={image} className="w-96 rounded-lg" />
        </div>
        <div className="pl-5 w-full sm:w-3/4 mt-5 xl:mt-0">
          <div className="text-2xl">Description</div>
          <p
            className=" self-start items-start"
            dangerouslySetInnerHTML={{ __html: summary }}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDescription;
