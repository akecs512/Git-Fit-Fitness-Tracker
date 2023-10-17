import { Link } from "react-router-dom";

import Auth from "../../utils/auth";

const Header = ({ children }) => {
  return (
    <>
      <header className="nav bg-primary text-dark mb-4 display-flex align-center">
        <div className="container flex-column justify-center align-center text-center">
          {children}
        </div>
      </header>
    </>
  );
};

export default Header;
