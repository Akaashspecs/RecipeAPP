import { FC } from "react";
import { Link } from "react-router-dom";

type RecipeListType = {
  recipeCard: {
    id: number;
    title: string;
    image: string;
    summary: string;
  }[];
};

const RecipeCard: FC<RecipeListType> = ({ recipeCard }) => {
  return (
    <div className="no-scroll flex flex-wrap justify-around overflow-hidden overflow-y-scroll h-[calc(75%)]  sm:h-[calc(85%)] mt-5 ">
      {recipeCard.map((item) => (
        <div
          key={item.id}
          className="w-80 flex-col text-center border border-gray-200 shadow-xl mt-5 rounded-t-lg"
        >
          <img
            className="w-full rounded-t-lg object-contain hover:object-scale-down"
            src={item.image}
          />

          <div className="text-xl h-48 px-3 pt-3 relative overflow-hidden">
            <div className="h-16">{item.title}</div>

            <Link to={"/Recipe/Description/" + item.id}>
              <div className="absolute bottom-2 right-2 font-semibold underline decoration-cyan-400 hover:cursor-pointer ">
                Know more
              </div>
            </Link>

            <p
              className="text-sm  line-clamp-3 self-start items-start"
              dangerouslySetInnerHTML={{ __html: item.summary }}
            ></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeCard;
