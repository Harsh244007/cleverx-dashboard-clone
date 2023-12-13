import React, { memo } from "react";
import SurveyCard from "./SurveyCard/SurveyCard";
import { surveyType, surveysType } from "@/types/commonTypes";
import SurveyNotFound from "./SurveyNotFound";

const SurveyList = ({ surveys }: { surveys: surveysType }) => {
  if (surveys.length === 0) {
    return <SurveyNotFound />;
  }

  return (
    <div className="flex flex-wrap gap-2 lg:gap-4 justify-between">
      {surveys.map((survey: surveyType, index: number) => (
        <SurveyCard key={index} survey={survey} />
      ))}
    </div>
  );
};

export default memo(SurveyList);
