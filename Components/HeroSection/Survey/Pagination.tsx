import { SurveyContext } from "@/Configs/contexts/SurveyContext";
import { PaginationButtonsType } from "@/types/commonTypes";
import { memo, useContext } from "react";

const PaginationButtons = ({ handlePageChange }: PaginationButtonsType) => {
  const { store } = useContext(SurveyContext);
  let totalPages = store.paginationDetails.totalPages;
  let currentPage = store.paginationDetails.currentPage;
  if (store.selectedIndustries.length !== 0 || store.selectedCountries.length !== 0 || store.searchSurvey !== "") {
    totalPages = 1;
    currentPage = 1;
  }

  return Array.from({ length: totalPages }, (_, index) => (
    <button
      key={index}
      onClick={() => handlePageChange(index + 1)}
      className={`px-2 py-1 mx-1 rounded ${index + 1 === currentPage ? "bg-black text-white" : "text-black"}`}
    >
      {index + 1}
    </button>
  ));
};
export default memo(PaginationButtons);
