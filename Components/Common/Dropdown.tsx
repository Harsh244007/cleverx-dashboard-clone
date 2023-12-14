import { Accordion } from "@mantine/core";
import React, { memo } from "react";

const CustomDropdown = ({
  text,
  className,
  children,
}: {
  text: string;
  className: string;
  children: React.ReactNode;
}) => {
  return (
    <Accordion.Item className={`flex flex-col py-[14px] px-[20px] ${className}`} value={text}>
      <Accordion.Control>{text}</Accordion.Control>
      <Accordion.Panel>{children}</Accordion.Panel>
    </Accordion.Item>
  );
};
export default memo(CustomDropdown);
