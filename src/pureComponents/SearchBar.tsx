import { BsSearch } from "react-icons/bs";
import { FC, InputHTMLAttributes } from "react";

type SearchBarProps = InputHTMLAttributes<HTMLInputElement>;

const SearchBar: FC<SearchBarProps> = (props) => {
  return (
    <div className="relative w-max-96 sm:w-96">
      <input
        {...props}
        className="px-2 py-1 w-full rounded-full border border-black"
        type="text"
        placeholder="Search"
      />
      <BsSearch className="absolute right-4 top-1/2 -translate-y-1/2" />
    </div>
  );
};

export default SearchBar;
