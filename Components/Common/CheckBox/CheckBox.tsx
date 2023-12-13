import { useRouter } from "next/navigation";
import React, { memo, useDeferredValue, useState } from "react";
type CustomCheckBoxType = { items: string[]; redirect: boolean };

const CustomCheckBox = ({ items, redirect }: CustomCheckBoxType) => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const deferdSearchTerm = useDeferredValue(searchTerm);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const item = e.target.value;
    if (e.target.checked) {
      setSelectedItems([...selectedItems, item]);
    } else {
      {
        redirect && router.push(`${location.search}&country=${item}`);
      }
      const updatedItems = selectedItems.filter((selected) => selected !== item);
      setSelectedItems(updatedItems);
    }
  };

  const filteredItems = items.filter((item) => item?.toLowerCase().includes(deferdSearchTerm.toLowerCase()));

  const handleRemoveSelectedItems = (item: string) => {
    const updatedSelectedItems = selectedItems.filter((selected) => selected !== item);
    setSelectedItems(updatedSelectedItems);
  };

  return (
    <div className="w-full mx-auto mt-1">
      {filteredItems.length>0?<>

      <div className="mb-4">
        <h2 className="font-gray-300 text-sm ">Selected Items:</h2>
        <div className="flex flex-wrap gap-2">
          {selectedItems.map((selected, index) => (
            <button
              key={index}
              className="bg-blue-600 cursor-pointer text-white px-2 py-1 rounded-xl"
              onClick={() => setSelectedItems(selectedItems.filter((item) => item !== selected))}
            >
              {selected}
              <button className="ml-1" onClick={() => handleRemoveSelectedItems(selected)}>
                x
              </button>
            </button>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search Country"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 w-full"
        />
      </div>
      <div>
        <div className="flex flex-col gap-2">
          {filteredItems.map((item, index) => (
            <label key={item} className="flex items-center">
              <input
                type="checkbox"
                value={item}
                checked={selectedItems.includes(item)}
                onChange={handleCheckboxChange}
                className="mr-2 w-4 h-4"
              />
              {item}
            </label>
          ))}
        </div>
      </div>
      </>:<p>No items available.</p>}
    </div>
  );
};
export default memo(CustomCheckBox);
