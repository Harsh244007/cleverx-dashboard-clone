import { PaginationButtonsType } from "@/types/commonTypes";
import { memo } from "react";

const PaginationButtons = ({ paginationDetails, handlePageChange }: PaginationButtonsType) => {
  return Array.from({ length: paginationDetails.totalPages }, (_, index) => (
    <button
      key={index}
      onClick={() => handlePageChange(index + 1)}
      className={`px-2 py-1 mx-1 rounded ${
        index + 1 === paginationDetails.currentPage ? "bg-black text-white" : "text-black"
      }`}
    >
      {index + 1}
    </button>
  ));
};
export default memo(PaginationButtons);
