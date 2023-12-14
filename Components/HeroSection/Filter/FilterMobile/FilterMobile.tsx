import { memo } from "react";
import FiltersButtons from "./FiltersButton";
import { MantineProvider } from "@mantine/core";
const FiltersMobile = () => {
  return (
    <section className="lg:hidden my-2"> 
      <MantineProvider>
        <FiltersButtons />
      </MantineProvider>
    </section>
  );
};
export default memo(FiltersMobile);
