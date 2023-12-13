import { memo } from "react";
import HomeIcon from "@/public/assets/footer/home.png";
import PeopleIcon from "@/public/assets/footer/people.png";
import ProjectIcon from "@/public/assets/footer/project.png";
import JobsIcon from "@/public/assets/footer/jobs.png";
import WorkIcon from "@/public/assets/footer/work.png";
import FooterImage from "./FooterImage";
const Footer = () => {
  const footerItems = [
    { text: "Home", icon: <FooterImage src={HomeIcon} /> },
    { text: "People", icon: <FooterImage src={PeopleIcon} /> },
    { text: "New Project", icon: <FooterImage src={ProjectIcon} /> },
    { text: "My jobs", icon: <FooterImage src={JobsIcon} /> },
    { text: "Find work", icon: <FooterImage src={WorkIcon} /> },
  ];
  return (
    <footer className="h-16 border-t-2 border-gray-100 w-full backdrop-blur-sm z-10 bg-white bg-opacity-30 flex fixed bottom-0">
      <ul className="w-full m-auto flex max-w-6xl px-4 justify-between items-center  space-x-6">
        {footerItems.map((item, index) => (
          <li key={index} className="text-gray-500 cursor-pointer hover:scale-125 hover:text-black transition duration-300 text-[10px] sm:text-[12px] lg:text-sm flex items-center justify-center flex-col gap-1">
            {item.icon}
            {item.text}
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default memo(Footer);
