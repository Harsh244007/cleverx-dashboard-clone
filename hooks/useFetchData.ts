import { surveyType, useFetchDataType } from "@/types/commonTypes";

const useFetchData = ({ url, setSurveys, loading, setLoading, setError,setPaginationDetails,setFilteredIndustry }: useFetchDataType) => {
  async function getData() {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log("Fetched data", data);
      setSurveys(data.data);
      setPaginationDetails(data.pageDetails)
      setLoading(false);
      setFilteredIndustry(data.data.map((item:surveyType)=>item.industries?item.industries.flat():null))
    } catch (error) {
      setError("Error fetching data:");
      console.error("Error fetching data:", error);
    }
  }
  return { getData };
};
export default useFetchData;
