import dynamic from "next/dynamic";

const CustomCheckBox = dynamic(()=>import("./CheckBox"))

export default CustomCheckBox