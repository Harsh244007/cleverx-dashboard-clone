import dynamic from "next/dynamic";

const RenderSurvey = dynamic(()=>import("./RenderSurvery"))
export default RenderSurvey