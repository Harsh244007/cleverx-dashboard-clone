import FilterDropdown from "./FilterDropdown";

const Filters = () => {
  const titleText = "Filters";
  return (
    <section className="flex flex-col gap-4">
      <h4>{titleText}</h4>
      <FilterDropdown />
    </section>
  );
};
export default Filters;
