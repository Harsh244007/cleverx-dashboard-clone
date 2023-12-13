import { Dispatch, SetStateAction } from "react";




//hooksTypes
export type useFilterItemsType = {
  surveys: surveysType;
  searchTerm: string;
  deFeredSearchTerm: string;
};

export type useReFetchDataType = Dispatch<SetStateAction<boolean>>;

export type useFetchDataType ={
  url: string,
  setSurveys: Dispatch<SetStateAction<surveysType>>,
  loading: boolean,
  setLoading: Dispatch<SetStateAction<boolean>>,
  setError: Dispatch<SetStateAction<string>>,
  setPaginationDetails:Dispatch<SetStateAction<paginationDetailsTypes>>;
  setFilteredIndustry:Dispatch<SetStateAction<string[]>>
}

export type paginationDetailsTypes = {
  totalPages:number;
  currentPage:number;
  currentTotalItems:number;
  totalItems:number;
}
export type ParticlesTypes = {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  refresh?: boolean;
};

export type surveyType = {
  Eligibility: string;
  countries: string[];
  duration: number;
  expires: string;
  inceentive: number;
  posted: string;
  title: string;
  type: string;
  industries?: string[];
};
export type surveysType = surveyType[] | [];

export type SearchBoxType = {
  searchTerm: string;
  loading: boolean;
  error: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
};

export type CustomButtonType = {
  text: string;
  className?: string;
};

export type PaginationButtonsType = {
  paginationDetails:paginationDetailsTypes;
  handlePageChange:(i:number)=>void;
}