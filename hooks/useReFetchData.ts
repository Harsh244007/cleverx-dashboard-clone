import { useReFetchDataType } from "@/types/commonTypes";
 const useReFetchData = (setReFetch:useReFetchDataType) => {
    const reFetchData = () => {
      setReFetch((prev) => !prev);
    };
    return { reFetchData };
  };
export default useReFetchData  