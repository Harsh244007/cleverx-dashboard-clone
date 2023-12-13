import { SearchBoxType } from "@/types/commonTypes";
import { Dispatch, SetStateAction, memo } from "react";


const SearchBox = ({ searchTerm, loading, error, setSearchTerm }: SearchBoxType) => {
  return (
    <div className="mb-3 lg:mb-6">
      <input
        type="text"
        placeholder="Search oppurtunities"
        value={searchTerm}
        disabled={loading || error !== ""}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={`border border-gray-200 rounded py-[13px] px-[14px] w-full ${
          loading || (error !== "" && "opacity-50 cursor-not-allowed")
        }`}
      />
    </div>
  );
};
export default memo(SearchBox);