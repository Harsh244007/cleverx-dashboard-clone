import { memo } from "react";
import FilterDropdown from "./FilterDropdown";

const Filters = ({filteredIndustry}:{filteredIndustry:string[]}) => {
  const titleText = "Filters";
  return (
    <section className="hidden lg:flex py-4 flex-col gap-4 ">
      <h4>{titleText}</h4>
      <FilterDropdown filteredIndustry={filteredIndustry}/>
    </section>
  );
};
export default memo(Filters);
