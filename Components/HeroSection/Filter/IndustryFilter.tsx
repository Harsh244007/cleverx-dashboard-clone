import CustomCheckBox from "@/Components/Common/CheckBox";
import { SurveyContext } from "@/Configs/contexts/SurveyContext";
import { useSearchParams } from "next/navigation";
import { memo, useContext, useMemo } from "react";

const IndustryFilter = () => {
  const { store, dispatch } = useContext(SurveyContext);

  if (store.loadingSurveys) return <p className="text-left w-full py-4">Loading Industries...</p>;

  const updateFilters = (item: string) => {
    dispatch && dispatch({ type: "INDUSTY_ADD_FILTER", payload: item });
    console.log("onclick of update filtes");
  };
  const removeFilter = (item: string) => {
    dispatch && dispatch({ type: "INDUSTRY_REMOVE_FILTER", payload: item });
    console.log("onclick of remove filtes");
  };
  const handleSearch = (item: string) => {
    dispatch && dispatch({ type: "INDUSTRY_HANDLE_SEARCH", payload: item });
  };
  return (
    <CustomCheckBox
      key={"industries"}
      totalItems={store.industries}
      selectedItems={store.selectedIndustries}
      addItems={updateFilters}
      removeItems={removeFilter}
      searchTerm={store.searchIndustry}
      handleSearch={handleSearch}
    />
  );
};
export default memo(IndustryFilter);
