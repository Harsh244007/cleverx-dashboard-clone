import { memo, useContext } from "react";
import FilterIcon from "@/public/assets/filter/filter.png";
import DropdownIcon from "@/public/assets/filter/dropdown.png";
import Image from "next/image";
import { SurveyContext } from "@/Configs/contexts/SurveyContext";
import { useDisclosure } from "@mantine/hooks";
import { Modal, ScrollArea } from "@mantine/core";
import FilterMobileModal from "./FilterMobileModal";
import FilterMobileFooter from "./FilterMobileFooter";
import FilterItems from "./FilterItems";
const FiltersButtons = () => {
  const { dispatch } = useContext(SurveyContext);
  const [opened, { open, close }] = useDisclosure();

  const handleClearFilter = () => {
    dispatch && dispatch({ type: "CLEAR_ALL_FILTERS" });
  };
  const openModal = () => {
    // @ts-ignore
    (document.querySelector(".mantine-Modal-root") as HTMLElement).style.display = "flex";

    open();
  };
  const closeModal = () => {
    // @ts-ignore
    (document.querySelector(".mantine-Modal-root") as HTMLElement).style.display = "none";
    close();
  };
  const openCountryModal = () => {
    dispatch && dispatch({ type: "UPDATE_MODAL_BUTTON", payload: 1 });
    openModal();
  };
  const openIndustryModal = () => {
    dispatch && dispatch({ type: "UPDATE_MODAL_BUTTON", payload: 2 });
    openModal();
  };
  const buttonItems = [
    { text: "All", img: FilterIcon, onclick: handleClearFilter, className: "flex-row-reverse" },
    { text: "Country", img: DropdownIcon, onclick: openCountryModal, className: "flex-row" },
    { text: "Industry", img: DropdownIcon, onclick: openIndustryModal, className: "flex-row" },
  ];
  return (
    <article className="flex gap-2 flex-col">
      <div className="flex gap-2">
        {buttonItems.map((item, index) => (
          <button
            onClick={() => item.onclick()}
            key={index}
            className={`px-3 py-2 h-max rounded-md w-max flex border-2 border-gray-200 hover:border-gray-800 hover:border-2 gap-1 ${item.className}`}
          >
            {item.text}
            <Image src={item.img} alt={item.text} width={16} height={16} />
          </button>
        ))}
      </div>
      <FilterItems />
      <Modal
        opened={opened}
        onClose={() => closeModal()}
        title="Filters"
        closeOnEscape
        scrollAreaComponent={ScrollArea.Autosize}
      >
        <FilterMobileModal onClose={closeModal} />
      </Modal>
    </article>
  );
};

export default memo(FiltersButtons);
