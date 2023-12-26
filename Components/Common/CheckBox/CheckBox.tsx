import { useRouter } from "next/navigation";
import React, { memo, useDeferredValue, useState } from "react";
type CustomCheckBoxType = {
  totalItems: string[] | [];
  selectedItems: string[] | [];
  addItems: (str: string) => void;
  removeItems: (str: string) => void;
  searchTerm: string;
  handleSearch: (str: string) => void;
};

const CustomCheckBox = ({
  totalItems,
  selectedItems,
  addItems,
  removeItems,
  searchTerm,
  handleSearch,
}: CustomCheckBoxType) => {

  return (
    <div className="w-full mx-auto mt-1">
      {totalItems.length > 0 ? (
        <>
          <div className="mb-4">
            <h2 className="font-gray-300 text-sm ">Selected Items:</h2>
            <div className="flex flex-wrap gap-2">
              {selectedItems.map((selected,index) => (
                <button key={index} onClick={() => removeItems(selected)} className="bg-blue-600 cursor-pointer text-white px-2 py-1 rounded-xl">
                  {selected}
                  <button className="ml-1" >
                    x
                  </button>
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <input
              type="search"
              placeholder="Search Country"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="border border-gray-300 rounded-md px-4 w-full py-2 w-full"
            />
          </div>
          <div>
            <div className="flex flex-col gap-2">
              {totalItems
                .filter((item) => (searchTerm !== "" ? item.toLowerCase().includes(searchTerm.toLowerCase()) : item))
                .map((item: string) => (
                  <label key={item} className="flex items-center cursor-pointer" onClick={() => addItems(item)}>
                    <input
                      type="checkbox"
                      value={item}
                      onChange={() => addItems(item)}
                      checked={[...selectedItems].includes(item)}
                      className="mr-2 w-4 h-4"
                    />
                    {item}
                  </label>
                ))}
            </div>
          </div>
        </>
      ) : (
        <p>No items available.</p>
      )}
    </div>
  );
};
export default memo(CustomCheckBox);
