import { FC, useEffect, useState } from "react";
import { options } from "../utils/helpers";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { addRecipeList } from "../store/actions/RecipeList.actions";
import { recipeSelectorData } from "../store/selector/recipe.selector";
import SearchBar from "../pureComponents/SearchBar";
import Select from "react-select";
import "./RecipeList.css";
import RecipeCard from "./RecipeCard";

type RecipeListType = {
  id: number;
  title: string;
  image: string;
  summary: string;
};
const RecipeList: FC = () => {
  const [query, setQuery] = useState<string>("");
  const [offset, setoffSet] = useState<number>(0);
  const [search, setSearch] = useState<string>("");
  const dispatch = useDispatch();
  const recipeListData: RecipeListType[] = useSelector(recipeSelectorData);
  const [selectedOption, setSelectedOption] = useState<
    { value: string; label: string }[]
  >([]);

  useEffect(() => {
    let selectCategory = [""];
    selectCategory = selectedOption.map((item) => item.value);

    dispatch(
      addRecipeList({
        offset: offset,
        number: 10,
        query: query,
        cuisine:
          selectCategory.toString() !== undefined
            ? selectCategory.toString()
            : "",
      })
    );
  }, [query, selectedOption, offset]);

  const emptyArray = new Array(900);
  const pageCount = emptyArray.length / 10;
  const handlePageClick = (event: any) => {
    setoffSet(event.selected * 10);
  };

  const showsQueryChange = (event: string) => {
    setQuery(event);
  };

  const searchChange = (event: string) => {
    console.log(event);
    setSearch(event);
  };

  return (
    <div className="w-screen  h-screen flex flex-col items-center">
      <div className="flex flex-col sm:flex-row justify-between items-center py-2 w-screen bg-gradient-to-r from-orange-500 to-orange-400 px-10">
        <div className="flex">
          <img
            src="/app-logo.png"
            alt="app-logo"
            className="h-[70px] w-[70px]"
          />
          <div className="lavishly-yours-regular text-[45px] text-white">
            Recipe App
          </div>
        </div>

        <SearchBar
          placeholder="Search Bar"
          value={search}
          showsQueryChange={(value) => showsQueryChange(value)}
          searchChange={(value) => searchChange(value)}
        />
        <Select
          placeholder="Cuisine Category"
          className="w-max-96 sm:w-96 mt-3 sm:mt-0 sm:ml-3 lg:ml-0"
          defaultValue={selectedOption}
          onChange={(e: any) => setSelectedOption(e)}
          isMulti
          options={options}
        />
      </div>
      <div className="w-4/5">
        <RecipeCard recipeCard={recipeListData} />
        <ReactPaginate
          className="flex justify-center bg-slate-200 gap-1 rounded-xl mt-5 "
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          previousLinkClassName=""
          activeLinkClassName="text-sky-500"
          pageLinkClassName="hover:text-sky-500"
        />
      </div>
    </div>
  );
};

export default RecipeList;
