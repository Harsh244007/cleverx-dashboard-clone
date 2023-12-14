import { surveyType, useFetchDataType } from "@/types/commonTypes";

const useFetchData = ({ url, setLoading, setError }: useFetchDataType) => {
  async function getData() {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (error) {
      setError("Error fetching data:");
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  }
  return { getData };
};
export default useFetchData;
