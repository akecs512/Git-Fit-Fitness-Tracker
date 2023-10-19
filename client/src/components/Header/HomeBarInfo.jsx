import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

const HomeBarInfo = ({name}) => {
  return (
    <>
      <p className="m-0 font-bold md:text-4xl sm:text-3xl min-[340px]:text-2xl">
       {name} Track your workouts and get fit!
      </p>
      <div>
        {Auth.loggedIn() ? (
          <>
            <Link className="btn btn-lg btn-neutral m-2" to="/me">
              Add Workout
            </Link>
          </>
        ) : (
          <>
            <Link className="btn btn-lg btn-primary m-2" to="/login">
              Login
            </Link>
            <Link className="btn btn-lg btn-light m-2" to="/signup">
              Signup
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default HomeBarInfo;
