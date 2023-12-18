import { Dispatch, SetStateAction } from "react";

//hooksTypes
export type useFilterItemsType = {
  surveys: surveysType;
  searchTerm: string;
  countriesFilter: string[] | [];
  industriesFilter: string[] | [];
};

export type useReFetchDataType = Dispatch<SetStateAction<boolean>>;

export type useFetchDataType = {
  url: string;
  setLoading: (flag: boolean) => void;
  setError: Dispatch<SetStateAction<string>>;
};

export type paginationDetailsTypes = {
  totalPages: number;
  currentPage: number;
  currentTotalItems: number;
  totalItems: number;
};
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
  setSearchTerm: (str: string) => void;
};

export type CustomButtonType = {
  text: string;
  className?: string;
};

export type PaginationButtonsType = {
  handlePageChange: (i: number) => void;
};
export type defaultValuesType = {
  surveys: surveyType[] | [];
  countries: string[] | [];
  modalButton:1|2;
  industries: string[] | [];
  selectedCountries: string[] | [];
  selectedIndustries: string[] | [];
  paginationDetails: paginationDetailsTypes;
  searchSurvey: string;
  searchIndustry: string;
  searchCountry: string;
  filterModal: boolean;
  loadingSurveys: boolean;
  loadingCountry: boolean;
};
