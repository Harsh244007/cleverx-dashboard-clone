import { defaultValuesType, surveyType, surveysType } from "@/types/commonTypes";
import { defaultValue } from "@/utils/util";
import React, { useReducer } from "react";
import { SurveyContext } from "./SurveyContext";

type actionType = {
  type: string;
  payload: any;
};

const SurveyContextProvider = ({ children }: { children: React.ReactNode }) => {
  const SurveyReducer = (state: defaultValuesType, action: actionType) => {
    switch (action.type) {
      case "UPDATE_SURVEYS": {
        const filteredIndustry: string[] = action?.payload?.data.reduce((store: string[], obj: surveyType) => {
          obj.industries && obj.industries.length > 0 && store.push(...obj.industries);
          return store;
        }, []);
        const uniqueIndustries: string[] =
          // @ts-ignore set unknown error
          filteredIndustry && filteredIndustry.length > 0 ? [...new Set(filteredIndustry)] : [];
        return {
          ...state,
          surveys: action?.payload?.data,
          paginationDetails: action?.payload?.pageDetails,
          loadingSurveys: false,
          industries: uniqueIndustries,
        };
      }
      case "CLEAR_ALL_FILTERS": {
        return { ...state, selectedIndustries: [], selectedCountries: [] };
      }
      case "UPDATE_MODAL_BUTTON": {
        return { ...state, modalButton: action?.payload };
      }
      case "UPDATE_COUNTRIES": {
        return { ...state, countries: action?.payload, loadingCountry: false };
      }

      //SURVEY LOADING AND SEARCH
      case "HANDLE_SURVEY_LOADING": {
        return { ...state, loadingSurveys: action?.payload };
      }
      case "HANDLE_SURVEY_SEARCH": {
        return { ...state, searchSurvey: action?.payload };
      }

      //INDUSTRY UPDATING, REMOVING AND SEARCH
      case "INDUSTRY_HANDLE_SEARCH": {
        return { ...state, searchIndustry: action?.payload };
      }
      case "INDUSTY_ADD_FILTER": {
        // @ts-ignore set unknown error
        const updatedSelectedIndustries = [...new Set([...state.selectedIndustries, action.payload])];

        // @ts-ignore set unknown error
        const newTotalIndustries = [...new Set([action.payload,...state.industries])]
        return { ...state, selectedIndustries: updatedSelectedIndustries,industries:newTotalIndustries };
      }
      case "INDUSTRY_REMOVE_FILTER": {
        const filteredIndustries = state.selectedIndustries.filter((item) => item !== action.payload);
        return { ...state, selectedIndustries: filteredIndustries };
      }

      //COUNTRY UPDATING, REMOVING AND SEARCH
      case "HANDLE_COUNTRY_LOADING": {
        return { ...state, loadingCountry: action?.payload };
      }
      case "HANDLE_COUNTRY_SEARCH": {
        return { ...state, searchCountry: action?.payload };
      }
      case "COUNTRY_ADD_FILTER": {
        // @ts-ignore set unknown error
        const updatedSelectedCountries = [...new Set([...state.selectedCountries, action.payload])];
        // @ts-ignore set unknown error
        const newTotalCountries = [...new Set([action.payload,...state.countries])]
        // console.log(action.payload,updatedSelectedCountries,"selected countrieS",state.countries,newTotalCountries)
        return { ...state, selectedCountries: updatedSelectedCountries ,countries:newTotalCountries};
      }
      case "COUNTRY_REMOVE_FILTER": {
        const filteredCountries = state.selectedCountries.filter((item) => item !== action.payload);
        return { ...state, selectedCountries: filteredCountries };
      }
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(SurveyReducer, defaultValue);
  return <SurveyContext.Provider value={{ store: state, dispatch: dispatch }}>{children}</SurveyContext.Provider>;
};

export default SurveyContextProvider;
