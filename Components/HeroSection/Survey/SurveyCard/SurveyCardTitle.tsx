import { surveyType } from "@/types/commonTypes"
import { memo } from "react"

const SurveyCardTitle=({survey}:{survey:surveyType})=>{
    return (<>
          {survey.title && (
        <div className="flex items-center">
          <h5 className="text-gray-800 text-sm font-[500] lg:text-base">{survey.title}</h5>
        </div>
      )}
      </>)
}
export  default memo(SurveyCardTitle)