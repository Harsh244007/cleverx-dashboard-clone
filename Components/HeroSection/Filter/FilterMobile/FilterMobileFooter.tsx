import { memo } from "react";

const FilterMobileFooter = ({ onClose }: { onClose: () => void }) => {
  return (
    <footer className="h-16 z-20 fixed bottom-0 bg-white flex justify-end items-center w-full p-4 border-t border-gray-200">
      <button onClick={onClose} className="bg-[#FB3363] mr-2 mb-1 text-white py-2 text-base px-4 rounded">
        Show Results
      </button>
    </footer>
  );
};
export default memo(FilterMobileFooter);
