import { surveysType, useFilterItemsType } from "@/types/commonTypes";
import { usePathname, useSearchParams } from "next/navigation";
import { useMemo } from "react";

const useFilterItems = ({ surveys, searchTerm, deFeredSearchTerm }: useFilterItemsType) => {
  const pathName = usePathname()
  const searchParams = useSearchParams();
  const filteredSurveys = useMemo(() => {
    if (searchTerm === "") {
      return surveys;
    } else {
      return surveys.filter((survey) => survey.title.toLowerCase().includes(deFeredSearchTerm.toLowerCase()));
    }
  }, [surveys, searchTerm,pathName,searchParams]);

  return { filteredSurveys };
};
export default useFilterItems