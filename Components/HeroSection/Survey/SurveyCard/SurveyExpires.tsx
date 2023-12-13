import { surveyType } from "@/types/commonTypes";
import { formatDueDate } from "@/utils/util";
import { memo } from "react";

const SurveyExpires = ({ survey }: { survey: surveyType }) => {
  return (
    <>
      {survey.expires && (
        <div>
          <p className="text-gray-500 text-[12px] lg:text-sm">Due On</p>
          <p className="text-gray-800 text-sm lg:text-md">{formatDueDate(survey.expires)}</p>
        </div>
      )}
    </>
  );
};
export default memo(SurveyExpires);
