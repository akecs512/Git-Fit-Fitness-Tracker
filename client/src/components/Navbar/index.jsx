import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

const Navbar = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <>
      <div className="navbar bg-neutral justify-between text-neutral-content">
        <div>
          <Link to = '/' className="btn btn-ghost normal-case text-xl">
            <img className="nav-logo h-10" src="/gitFitWht.png" alt="logo" />
          </Link>
        </div>
        <div className="justify-end">
          { Auth.loggedIn() &&
            <button className="btn btn-sm btn-light m-2" onClick={logout}>
              Logout
            </button>
          }
        </div>
      </div>
  
    </>
  );
};
export default Navbar;
