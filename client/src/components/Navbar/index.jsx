import Auth from "../../utils/auth";

const Navbar = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <>
      <div className="navbar justify-between bg-neutral text-neutral-content">
        <div>
          <a className="btn btn-ghost normal-case text-xl">
            <img className="nav-logo h-10" src="/gitFitWht.png" alt="logo" />
          </a>
        </div>
        <div className="justify-end">
          { Auth.loggedIn() &&
            <button className="btn btn-sm btn-light m-2" onClick={logout}>
              Logout
            </button>
          }
        </div>
      </div>
      ;
    </>
  );
};
export default Navbar;
