import CustomCheckBox from "@/Components/Common/CheckBox";
import React, { useState, useEffect } from "react";

const CountryFilter = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await fetch("/api/filters");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        setError("Error fetching data");
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="py-2">
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : items.length >0?(
        <ul className="divide-y divide-gray-300">
          <CustomCheckBox redirect={true} items={items}/>
        </ul>
      ):""}
    </section>
  );
};

export default CountryFilter;
