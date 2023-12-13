import CustomButton from "@/Components/Common/Button";
import { surveyType } from "@/types/commonTypes";
import { memo } from "react";

const SurveyCountries = ({ survey }: { survey: surveyType }) => {
  return (
    <>
      {survey.countries && (
        <div className="mb-2">
          <p className="text-gray-500 text-[12px] lg:text-sm">Countries</p>
          <div className="max-h-24 overflow-y-auto flex gap-1">
            {survey.countries.map((country: string, index: number) => (
              <CustomButton key={index} text={country} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default memo(SurveyCountries);
