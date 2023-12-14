import { memo, useContext } from "react";
import FilterDropdown from "./FilterDropdown";
import { SurveyContext } from "@/Configs/contexts/SurveyContext";

const Filters = () => {
  const titleText = "Filters";
  return (
    <section className="hidden lg:flex py-4 flex-col gap-4 ">
      <h4>{titleText}</h4>
      <FilterDropdown  />
    </section>
  );
};
export default memo(Filters);
