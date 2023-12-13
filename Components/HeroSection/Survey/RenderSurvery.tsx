"use client";

import { Dispatch, SetStateAction, memo, useDeferredValue, useEffect, useState } from "react";
import SurveyList from "./SurveyList";
import { paginationDetailsTypes, surveysType } from "@/types/commonTypes";
import SearchBox from "./SearchBox";
import useFetchData from "@/hooks/useFetchData";
import useFilterItems from "@/hooks/useFilterItems";
import useReFetchData from "@/hooks/useReFetchData";
import PaginationButtons from "./Pagination";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { defaultPaginationDetails, handlePageQueryChange } from "@/utils/util";

const RenderSurvey = ({ setFilteredIndustry }: { setFilteredIndustry: Dispatch<SetStateAction<string[]>> }) => {
  const [surveys, setSurveys] = useState<surveysType | []>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [reFetch, setReFetch] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [paginationDetails, setPaginationDetails] = useState<paginationDetailsTypes>(defaultPaginationDetails);
  const deFeredSearchTerm = useDeferredValue(searchTerm);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  var query: string;

  useEffect(() => {
    if (!loading) setLoading(true);
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
    useFetchData({
      url,
      setSurveys,
      loading,
      setLoading,
      setError,
      setPaginationDetails,
      setFilteredIndustry,
    }).getData();
  }, [reFetch, pathname, searchParams]);

  const handlePageChange = (page: number) => {
    router.push(`${handlePageQueryChange(location.search, paginationDetails.currentTotalItems * (page - 1))}`);
  };

  const { filteredSurveys } = useFilterItems({ surveys, searchTerm, deFeredSearchTerm });

  return (
    <article className="w-full mx-auto py-4 lg:p-4">
      <SearchBox searchTerm={searchTerm} loading={loading} error={error} setSearchTerm={setSearchTerm} />
      {loading ? <p>Loading...</p> : error !== "" ? <p>{error}</p> : <SurveyList setSearchTerm={setSearchTerm} surveys={filteredSurveys} />}
      {!loading && error === "" && paginationDetails.totalItems > 0 && filteredSurveys.length > 0 && (
        <div className="flex justify-center my-4">
          <PaginationButtons paginationDetails={paginationDetails} handlePageChange={handlePageChange} />
        </div>
      )}
    </article>
  );
};
export default memo(RenderSurvey);
