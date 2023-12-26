import { SurveyContext } from "@/Configs/contexts/SurveyContext";
import { SearchBoxType } from "@/types/commonTypes";
import { Dispatch, SetStateAction, memo, useContext } from "react";


const SearchBox = ({error}:{error:string}) => {
  const { dispatch,store } = useContext(SurveyContext);
  const setSearchTerm = (str: string) => {
    dispatch && dispatch({ type: "HANDLE_SURVEY_SEARCH", payload: str });
  };
  return (
    <div className="mb-3 lg:mb-6">
      <input
        type="search"
        placeholder="Search oppurtunities"
        value={store.searchSurvey}
        disabled={store.loadingSurveys || error !== ""}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={`border border-gray-200 rounded py-[13px] px-[14px] w-full ${
          store.loadingSurveys || (error !== "" && "opacity-50 cursor-not-allowed")
        }`}
      />
    </div>
  );
};
export default memo(SearchBox);
