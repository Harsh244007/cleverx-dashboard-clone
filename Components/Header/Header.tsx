import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

const Header = () => {
  return (
    <nav className="h-16 border-b-2 border-gray-100 flex">
      <HeaderDesktop />
      <HeaderMobile />
    </nav>
  );
};
export default Header;
