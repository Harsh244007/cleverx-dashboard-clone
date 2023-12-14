import { CustomButtonType } from "@/types/commonTypes";
import { memo } from "react";

const CustomButton = ({ text, className }: CustomButtonType) => {
  return <button className={`bg-gray-100 rounded text-[12px] lg:text-sm text-gray-900 py-1 px-2 mr-2 mb-2 ${className}`}>{text}</button>;
};
export default memo(CustomButton);
