import NavLinks from "./NavLinks";
import logo from "../images/1.png";

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Henry Omondi' Logo" />
      <NavLinks />
    </header>
  );
};

export default Header;
