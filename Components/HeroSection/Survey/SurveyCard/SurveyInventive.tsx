import { surveyType } from "@/types/commonTypes";
import { memo } from "react";

const SurveyIncentive = ({ survey }: { survey: surveyType }) => {
  return (
    <>
      {survey.inceentive && (
        <div>
          <p className="text-gray-500 text-[12px] lg:text-sm">Incentive</p>
          <p className="font-[600] text-lg">${survey.inceentive}</p>
        </div>
      )}
    </>
  );
};
export default memo(SurveyIncentive);
