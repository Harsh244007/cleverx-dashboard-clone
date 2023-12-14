"use client";
import { Accordion, MantineProvider } from "@mantine/core";
import { memo, useContext, useState } from "react";
import CountryFilter from "./CountryFilter";
import IndustryFilter from "./IndustryFilter";
import { SurveyContext } from "@/Configs/contexts/SurveyContext";
import CustomDropdown from "@/Components/Common/Dropdown";
const DropDown = () => {
  const DropdownItems = [
    { text: "Country", item: <CountryFilter /> },
    { text: "Industry", item: <IndustryFilter /> },
  ];
  return (
    <MantineProvider>
      <Accordion variant="separated" className=" border border-gray-300 rounded-md">
        {DropdownItems.map((item) => (
          <CustomDropdown className={item.text=="Industry"?"border-t border-gray-300":""} text={item.text} children={item.item} />
        ))}
      </Accordion>
    </MantineProvider>
  );
};
const CachedAccordion = memo(DropDown);

const FilterDropdown = () => {
  const { store, dispatch } = useContext(SurveyContext);
  const DDJson = {
    filter: "filters applied",
    clear: "clear filters",
  };
  return (
    <article className="flex flex-col gap-4 w-72">
      <div className="flex justify-between items-center w-full">
        <p className="text-gray-700 text-sm ">
          {store.selectedIndustries.length + store.selectedCountries.length} {DDJson.filter}
        </p>
        <button
          className="text-gray-500 underline hover:text-gray-900 text-sm"
          onClick={() => dispatch && dispatch({ type: "CLEAR_ALL_FILTERS" })}
        >
          {DDJson.clear}
        </button>
      </div>
      <CachedAccordion />
    </article>
  );
};
export default memo(FilterDropdown);
