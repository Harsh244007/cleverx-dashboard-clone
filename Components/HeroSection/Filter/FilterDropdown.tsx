"use client";
import { Accordion, MantineProvider } from "@mantine/core";
import { memo, useState } from "react";
import CountryFilter from "./CountryFilter";
import IndustryFilter from "./IndustryFilter";

const FilterDropdown = ({filteredIndustry}:{filteredIndustry:string[]}) => {
  const [selectedFilters, setSelectedFilters] = useState(0);
  const DDJson = {
    filter: "filters applied",
    clear: "clear filters",
  };
  return (
    <MantineProvider>
      <article className="flex flex-col gap-4 w-72">
        <div className="flex justify-between items-center w-full">
          <p className="text-gray-700 text-sm ">
            {selectedFilters} {DDJson.filter}
          </p>
          <button className="text-gray-500 underline hover:text-gray-900 text-sm">{DDJson.clear}</button>
        </div>
        <Accordion variant="separated" className=" border border-gray-300 rounded-md">
          <Accordion.Item className="flex flex-col py-[14px] px-[20px] border-b border-gray-300" value="country">
            <Accordion.Control>Country</Accordion.Control>
            <Accordion.Panel><CountryFilter/></Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item className="flex flex-col py-[14px] px-[20px]" value="industry">
            <Accordion.Control>Industry</Accordion.Control>
            <Accordion.Panel><IndustryFilter filteredIndustry={filteredIndustry}/></Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </article>
    </MantineProvider>
  );
};
export default memo(FilterDropdown);
