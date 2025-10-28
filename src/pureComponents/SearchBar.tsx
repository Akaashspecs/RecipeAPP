import { BsSearch } from "react-icons/bs";
import { FC, InputHTMLAttributes } from "react";

type SearchBarProps = {
  value: string;
  placeholder: string;
  showsQueryChange: (value: string) => void;
  searchChange: (value: string) => void;
};

const SearchBar: FC<SearchBarProps> = (props) => {
  return (
    <div className="flex relative w-max-96 sm:w-96">
      <input
        value={props.value}
        aria-placeholder={props.placeholder}
        onChange={(e) => props.searchChange(e.target.value)}
        className="px-2 py-1 w-full rounded-md shadow-2xl border focus:border-none border-gray-400"
        type="text"
        placeholder="Search"
      />
      <div
        className="bg-amber-300 w-[100px] flex justify-center items-center relative -left-[80px] rounded-md my-[1px] cursor-pointer"
        onClick={() => props.showsQueryChange(props.value)}
      >
        <BsSearch className="   " />
      </div>
    </div>
  );
};

export default SearchBar;
