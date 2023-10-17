import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import WorkoutsList from "../components/WorkoutsList";
import WorkoutForm from "../components/WorkoutForm";

import { QUERY_SINGLE_USER, QUERY_ME } from "../utils/queries";

import Auth from "../utils/auth";
import { ADD_WORKOUT } from "../utils/mutations";

const User = () => {
  const { userId } = useParams();

  // If there is no `userId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
  const { loading, data } = useQuery(userId ? QUERY_SINGLE_USER : QUERY_ME, {
    variables: { userId: userId },
  });

  // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_USER` query
  const user = data?.me || data?.user || {};

  // Use React Router's `<Redirect />` component to redirect to personal user page if username is yours
  if (Auth.loggedIn() && Auth.getUser().data._id === userId) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.name) {
    return (
      <h4>
        You need to be logged in to see your user page. Use the navigation links
        above to sign up or log in!
      </h4>
    );
  }

  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: "url(/barbells.jpg" }}
    >
        <div className="card glass w-96 my-8">
            <div className="card-body">
              <div>
      <h2 className="card-title text-5xl justify-center text-secondary font-bold">
        Add Workout
      </h2>
      </div>
   
      <div>
        <WorkoutForm userId={user._id} query={ADD_WORKOUT} />
      </div>
    </div>
    </div>
    </div>
  
  );
};

export default User;
