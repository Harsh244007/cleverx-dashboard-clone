import CustomButton from "@/Components/Common/Button";
import { surveyType } from "@/types/commonTypes";
import { memo } from "react";

const SurveyCardIndustries = ({ survey }: { survey: surveyType }) => {
  return (
    <>
      {survey.industries && (
        <div className="mb-2">
          <p className="text-gray-500 text-[12px] lg:text-sm">Industries</p>
          <div className="max-h-24 overflow-y-auto gap-1 flex">
            {survey.industries.map((industry, index) => (
              <CustomButton key={index} text={industry} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default memo(SurveyCardIndustries);
