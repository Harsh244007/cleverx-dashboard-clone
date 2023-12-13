import Image from "next/image";
import MainLogo from "@/public/assets/header/Logo.png";
import SettingIcon from "@/public/assets/header/settings.png";
import CreditCardIcon from "@/public/assets/header/creditCard.svg";
import ProfileIcon from "@/public/assets/header/profileImage.png";

const HeaderDesktop = () => {
  const HeaderItems = {
    navItems: ["Oppurtunities", "Work", "Message"],
  };
  return (
    <section className="hidden lg:flex max-w-6xl w-full m-auto px-4 justify-between">
      <article className="flex items-center justify-center gap-[20px]">
        <Image className="cursor-pointer" src={MainLogo} alt="Logo" width={35} height={35} />
        <ul className="flex gap-[20px]">
          {HeaderItems.navItems.map((item, index) => (
            <li className="cursor-pointer header-font" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </article>
      <article className="flex items-center justify-center gap-[20px]">
        <Image src={CreditCardIcon} className="cursor-pointer" width={18} height={18} alt="Settings" />
        <Image src={SettingIcon} className="cursor-pointer" width={18} height={18} alt="Settings" />
        <Image src={ProfileIcon} className="cursor-pointer" width={36} height={36} alt="Settings" />
      </article>
    </section>
  );
};
export default HeaderDesktop;
