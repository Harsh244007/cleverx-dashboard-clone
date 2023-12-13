import CustomCheckBox from "@/Components/Common/CheckBox";
import { useSearchParams } from "next/navigation";
import { memo, useMemo } from "react";

const IndustryFilter = ({ filteredIndustry }: { filteredIndustry: string[] }) => {
    const searchParams = useSearchParams()
    const newFlatIndustry = useMemo(() => {
        return filteredIndustry.flat().filter((item, index, array) => array.indexOf(item) === index);
      }, [filteredIndustry,searchParams]);
  return <CustomCheckBox redirect={false} items={newFlatIndustry} />;
}
export default memo(IndustryFilter)