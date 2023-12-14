import { surveyType, surveysType, useFilterItemsType } from "@/types/commonTypes";
import { usePathname, useSearchParams } from "next/navigation";
import { useMemo } from "react";

const useFilterItems = ({ surveys, searchTerm, industriesFilter, countriesFilter }: useFilterItemsType) => {
  let filtered = [...surveys];

  if (searchTerm !== "") {
    filtered = filtered.filter((survey) => survey.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  if (industriesFilter.length > 0) {
    filtered = filtered.filter(
      // @ts-ignore
      (survey) => survey.industries && survey.industries.some((industry: string) => industriesFilter.includes(industry))
    );
  }

  if (countriesFilter.length > 0) {
    filtered = filtered.filter((survey) =>
      // @ts-ignore
      survey.countries.some((country: string) => countriesFilter.includes(country))
    );
  }

  return filtered;
};
export default useFilterItems;
