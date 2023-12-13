import Image from "next/image";
import ChatIcon from "@/public/assets/header/chat.png";
import WalletIcon from "@/public/assets/header/wallet.png";
import ProfileIcon2 from "@/public/assets/header/profileImage2.png";

const HeaderMobile = () => {
  return (
    <section className="flex lg:hidden max-w-6xl w-full m-auto px-4 justify-between">
      <Image src={ProfileIcon2} className="cursor-pointer" width={36} height={36} alt="Settings" />
      <article className="flex items-center justify-center gap-[20px]">
        <Image src={ChatIcon} className="cursor-pointer" width={18} height={18} alt="Settings" />
        <Image src={WalletIcon} className="cursor-pointer" width={18} height={18} alt="Settings" />
      </article>
    </section>
  );
};
export default HeaderMobile;
