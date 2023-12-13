import CustomButton from "@/Components/Common/Button";
import { surveyType } from "@/types/commonTypes";
import { formatDueDate, formatPostedDate } from "@/utils/util";
import React, { memo } from "react";
import SurveyIcon from "@/public/assets/hero/survey.png";
import Image from "next/image";
import SurveyCardIndustries from "./SurveyCardIndustries";
import SurveyCountries from "./SurveyCountries";
import SurveyCardTitle from "./SurveyCardTitle";
import SurveyEligibility from "./SurveyEligibility";
import SurveyExpires from "./SurveyExpires";
import SurveyIncentive from "./SurveyInventive";
const SurveyCard = ({ survey }: { survey: surveyType }) => {
  return (
    <div className="border w-full sm:w-[48%] bg-white shallow-shadow rounded-[10px] p-5 lg:p-6 ">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-gray-500 flex items-center gap-2 text-[12px] lg:text-sm">
          <Image src={SurveyIcon} width={14} alt="Survey" height={14} />
          Survey
        </p>
        <p className="bg-[#C8F5D5] px-2 w-11 text-[12px] leading-none lg:text-[14px]  text-green-700 py-1 rounded">
          Live
        </p>
      </div>
      <SurveyCardTitle survey={survey} />
      {survey.posted && (
        <p className="mb-3 text-gray-500 text-[10px] lg:text-[12px]">Posted: {formatPostedDate(survey.posted)}</p>
      )}
      <SurveyEligibility survey={survey} />
      <SurveyCardIndustries survey={survey} />
      <SurveyCountries survey={survey} />
      <div className="flex justify-between">
        <SurveyExpires survey={survey} />
        <SurveyIncentive survey={survey} />
      </div>
    </div>
  );
};

export default memo(SurveyCard);
