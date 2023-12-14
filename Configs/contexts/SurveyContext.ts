import { defaultValuesType } from "@/types/commonTypes";
import { defaultValue } from "@/utils/util";
import { createContext } from "react";

type ProviderProps = {
    store: defaultValuesType;
    dispatch?: React.Dispatch<any>;
  };
  
export const SurveyContext = createContext<ProviderProps>({store:defaultValue});
