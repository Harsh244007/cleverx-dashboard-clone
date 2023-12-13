import { surveyType } from "@/types/commonTypes"
import { memo } from "react"

const SurveyEligibility=({survey}:{survey:surveyType})=>{
    return (<>      {survey.Eligibility && (
        <div className="mb-2">
          <p className="text-gray-500 text-[12px]">Eligibility</p>
          <p className="text-gray-800 text-sm font-[500] lg:text-base">{survey.Eligibility}</p>
        </div>
      )}
</>)
}
export default memo(SurveyEligibility)