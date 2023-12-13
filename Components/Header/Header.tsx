import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

const Header = () => {
  return (
    <nav className="h-16 border-b-2 border-gray-100 w-full backdrop-blur-sm z-10 bg-white bg-opacity-30 flex fixed">
      <HeaderDesktop />
      <HeaderMobile />
    </nav>
  );
};
export default Header;
