import { defaultValuesType, paginationDetailsTypes } from "@/types/commonTypes";

export function cleanQuery(str: string) {
  return str
    .split("?")[1]
    .split("&")
    ?.reduce((store: { [key: string]: string | string[] | null }, item: string) => {
      const [key, value] = item.split("=");
      if (key == "country" && !Array.isArray(store[key])) store[key] = [value];
      else if (store[key]) {
        Array.isArray(store[key]) ? (store[key] as string[]).push(value) : (store[key] = [store[key] as string, value]);
      } else {
        store[key] = value;
      }
      return store;
    }, {} as { [key: string]: string | string[] | null });
}
export const formatPostedDate = (dateString: string) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const date = new Date(dateString);
  return `${months[date.getMonth()]} ${date.getDate()}`;
};

export const formatDueDate = (dateString: string) => {
  const date = new Date(dateString);

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const month = months[date.getMonth()];
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const suffix = (day: number) => {
    if (day === 1 || day === 21 || day === 31) return "st";
    if (day === 2 || day === 22) return "nd";
    if (day === 3 || day === 23) return "rd";
    return "th";
  };

  const formattedDate = `${month} ${day}${suffix(day)}, ${hours % 12 || 12}:${minutes < 10 ? "0" : ""}${minutes} ${
    hours >= 12 ? "PM" : "AM"
  } IST`;

  return formattedDate;
};
export const handlePageQueryChange = (str: string, newValue: number) => {
  if (str === "") str = "?count=10&start=10";
  return str
    .split("&")
    .map((part) => {
      if (part.startsWith("start=")) {
        return `start=${newValue}`;
      }
      return part;
    })
    .join("&");
};

export const defaultPaginationDetails: paginationDetailsTypes = {
  totalItems: 0,
  totalPages: 0,
  currentPage: 0,
  currentTotalItems: 0,
};

export const defaultValue: defaultValuesType = {
  surveys: [],
  countries: [],
  industries: [],
  selectedCountries: [],
  modalButton: 1,
  selectedIndustries: [],
  paginationDetails: defaultPaginationDetails,
  searchSurvey: "",
  searchIndustry: "",
  searchCountry: "",
  filterModal: false,
  loadingSurveys: true,
  loadingCountry: true,
};
