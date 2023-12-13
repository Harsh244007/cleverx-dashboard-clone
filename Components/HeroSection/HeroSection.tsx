"use client";
import { Suspense, memo, useState } from "react";
import FilterSection from "./Filter";
import RenderSurvey from "./Survey";

const HeroSection = () => {
  const [filteredIndustry,setFilteredIndustry] = useState<string[]>([])
  return (
    <>
      <section className="flex justify-between">
        <Suspense>
          <FilterSection filteredIndustry={filteredIndustry} />
        </Suspense>

        <Suspense>
          <RenderSurvey setFilteredIndustry={setFilteredIndustry}/>
        </Suspense>
      </section>
    </>
  );
};
export default memo(HeroSection)
