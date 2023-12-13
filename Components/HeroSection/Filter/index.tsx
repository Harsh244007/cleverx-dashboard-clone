import dynamic from "next/dynamic";

const FilterSection = dynamic(()=>import("./Filter"))
export default FilterSection