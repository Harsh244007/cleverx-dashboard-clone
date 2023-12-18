import CustomCheckBox from "@/Components/Common/CheckBox";
import { SurveyContext } from "@/Configs/contexts/SurveyContext";
import useFetchData from "@/hooks/useFetchData";
import React, { useState, useEffect, useContext } from "react";

const CountryFilter = () => {
  const [error, setError] = useState("");
  const { store, dispatch } = useContext(SurveyContext);

  useEffect(() => {
    const setLoading = (flag: boolean) => {
      dispatch && dispatch({ type: "HANDLE_COUNTRY_LOADING", payload: flag });
    };
    const fetchData = async () => {
      const url = "/api/filters";
      const data = await useFetchData({
        url,
        setLoading,
        setError,
      }).getData();
      console.log(data,"data from countries")
      dispatch && dispatch({ type: "UPDATE_COUNTRIES", payload: data });
    };
    fetchData();
  }, []);

  const updateFilters = (item: string) => {
    dispatch && dispatch({ type: "COUNTRY_ADD_FILTER", payload: item });
    console.log("onclick of update filtes");
  };
  const removeFilter = (item: string) => {
    dispatch && dispatch({ type: "COUNTRY_REMOVE_FILTER", payload: item });
    console.log("onclick of remove filtes");
  };
  const handleSearch = (item: string) => {
    dispatch && dispatch({ type: "HANDLE_COUNTRY_SEARCH", payload: item });
  };

  if (store.loadingCountry) return <p className="text-center py-2">Loading Countries...</p>;
  if (error) return <p className="text-center py-2 text-red-500">{error}</p>;
  if (store?.countries?.length === 0) return <p className="text-center py-2">No Countries found...</p>;


  // console.log
  return (
    <section className="py-2 w-full">
      <ul className="divide-y divide-gray-300">
        <CustomCheckBox
          key={"countries"}
          totalItems={store.countries}
          selectedItems={store.selectedCountries}
          addItems={updateFilters}
          removeItems={removeFilter}
          searchTerm={store.searchCountry}
          handleSearch={handleSearch}
        />
      </ul>
    </section>
  );
};

export default CountryFilter;
