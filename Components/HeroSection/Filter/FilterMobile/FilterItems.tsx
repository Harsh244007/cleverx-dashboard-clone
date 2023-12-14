import { SurveyContext } from "@/Configs/contexts/SurveyContext";
import { memo, useContext } from "react";

const FilterItems = () => {
  const { store, dispatch } = useContext(SurveyContext);
  const totalFilters = store.selectedCountries.length + store.selectedIndustries.length;

  const removeFilter = (str: string, id: number) => {
    dispatch && dispatch({ type: id === 1 ? "COUNTRY_REMOVE_FILTER" : "INDUSTRY_REMOVE_FILTER", payload: str });
  };

  const renderSelectedFilters = (filters: string[] | [], itemId: number) => {
    return (
      filters.length > 0 &&
      filters.map((filter: string, index: number) => (
        <button key={index} className="bg-blue-600 cursor-pointer text-white px-2 py-1 rounded-xl">
          {filter} <span onClick={() => removeFilter(filter, itemId)}>x</span>
        </button>
      ))
    );
  };
  return (
    <>
      {totalFilters > 0 && <p className="text-gray-500 text-sm pb-2">{totalFilters} filters applieed.</p>}
      <div className="flex flex-wrap gap-1">
        {store.selectedCountries.length > 0 && renderSelectedFilters(store.selectedCountries, 1)}
        {store.selectedIndustries.length > 0 && renderSelectedFilters(store.selectedIndustries, 2)}
      </div>
    </>
  );
};
export default memo(FilterItems);
