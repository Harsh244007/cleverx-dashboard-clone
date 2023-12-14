import { memo, useContext } from "react";
import CountryFilter from "../CountryFilter";
import FilterMobileFooter from "./FilterMobileFooter";
import { SurveyContext } from "@/Configs/contexts/SurveyContext";
import IndustryFilter from "../IndustryFilter";

const FilterMobileModal = ({ onClose }: { onClose: () => void }) => {
  const { store, dispatch } = useContext(SurveyContext);
  const components = {
    1: <CountryFilter />,
    2: <IndustryFilter />,
  };
  const handleButtonClick = (buttonId: number) => {
    dispatch && dispatch({ type: "UPDATE_MODAL_BUTTON", payload: buttonId });
  };
  const Buttons = [
    { text: "Country", id: 1 },
    { text: "Industry", id: 2 },
  ];
  return (
    <section className="p-4 flex">
      <div className="flex flex-col min-w-32 w-32 sm:w-60 sm:min-w-60  border-r border-gray-100">
        {Buttons.map((item) => (
          <button
            key={item.id}
            className={`text-sm  h-10 ${
              store.modalButton === item.id ? "bg-gray-800 text-white":"bg-white text-gray-600"
            }`}
            onClick={() => handleButtonClick(item.id)}
          >
            {item.text}
          </button>
        ))}
      </div>
      <div className="p-2 sm:p-4">

      {store.modalButton && components[store.modalButton]}
      </div>
      <FilterMobileFooter onClose={onClose} />
    </section>
  );
};
export default memo(FilterMobileModal);
