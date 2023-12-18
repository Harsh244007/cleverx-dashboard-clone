"use client";

import { Dispatch, SetStateAction, memo, useContext, useDeferredValue, useEffect, useState } from "react";
import SurveyList from "./SurveyList";
import { paginationDetailsTypes, surveyType, surveysType } from "@/types/commonTypes";
import SearchBox from "./SearchBox";
import useFetchData from "@/hooks/useFetchData";
import useFilterItems from "@/hooks/useFilterItems";
import PaginationButtons from "./Pagination";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { handlePageQueryChange } from "@/utils/util";
import { SurveyContext } from "@/Configs/contexts/SurveyContext";
import SurveyNotFound from "./SurveyNotFound";
import FiltersMobile from "../Filter/FilterMobile";

const RenderSurvey = () => {
  var query: string;
  const [error, setError] = useState<string>("");
  const { store, dispatch } = useContext(SurveyContext);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (error !== "") setError("");
    const countQuery = searchParams.get("count") || 10;
    const startQuery = searchParams.get("start") || 0;
    function handleCountryQuery(arr: string[]) {
      return arr.reduce((store: string, item: string) => {
        const newItem = "&country=" + item;
        store = store + newItem;
        return store;
      }, "");
    }
    const countryQuery = searchParams.has("country") ? handleCountryQuery(searchParams?.getAll("country")) : "";
    query = `?count=${countQuery}&start=${startQuery}${countryQuery}`;

    const url = `/api/list${query}`;
    const setLoading = (flag: boolean) => {
      dispatch && dispatch({ type: "HANDLE_SURVEY_LOADING", payload: flag });
    };
    const pendingData = useFetchData({
      url,
      setLoading,
      setError,
    }).getData();
    async function UpdateStates() {
      const data = await pendingData;
      dispatch && dispatch({ type: "UPDATE_SURVEYS", payload: data });
    }
    UpdateStates();
  }, [pathname, searchParams]);

  const handlePageChange = (page: number) => {
    router.push(`${handlePageQueryChange(location.search, store.paginationDetails.currentTotalItems * (page - 1))}`);
  };

  if (store.loadingSurveys) return <p className="text-left w-full lg:p-4">Loading Surveys...</p>;
  if (error !== "") return <p className="text-left w-full lg:p-4">{error}</p>;
  const filteredSurveys = useFilterItems({
    surveys: store.surveys,
    searchTerm: store.searchSurvey,
    industriesFilter: store.selectedIndustries,
    countriesFilter: store.selectedCountries,
  });

  if (store.surveys.length === 0 || store.paginationDetails.totalItems === 0 || filteredSurveys.length === 0) {
    return (
      <article className="w-full mx-auto py-4 lg:p-4">
        {(store.searchSurvey != "" || store.selectedCountries.length >= 1 || store.selectedIndustries.length >= 1) && (
          <SearchBox error={error} />
        )}
        <SurveyNotFound />
      </article>
    );
  }

  return (
    <article className="w-full mx-auto py-4 lg:p-4">
      <SearchBox error={error} />
      <FiltersMobile/>
      {filteredSurveys.length >= 1 && (
        <div>
          <p className="text-gray-500 text-sm pb-2">
            {filteredSurveys.length === 1 ? filteredSurveys.length : filteredSurveys.length - 1}+ opportunities
          </p>
          <SurveyList surveys={filteredSurveys} />
        </div>
      )}

      <div className="flex justify-center my-4">
        <PaginationButtons  handlePageChange={handlePageChange} />
      </div>
    </article>
  );
};
export default memo(RenderSurvey);
