import { Link } from "react-router-dom";
import {
  workoutCategoriesBgColors,
  workoutCategoriesForeColors,
} from "../../utils/categories";
import { capitalize } from "lodash"
import Auth from "../../utils/auth";

const WorkoutsList = ({ workouts }) => {
  if (Auth.loggedIn() && !workouts.length) {
    return <h3>No Workouts Yet</h3>;
  }

  return (
    <>
      <div className="flex-row justify-space-between my-4">
        {workouts &&
          workouts.map((workout, index) => (
            <div key={index} className="col-12 col-xl-6 mb-5">
              {/* <div className="card-list mb-3 border-2  rounded"> */}
              <div className={`card w-96 bg-base-100 shadow-xl h-auto ${workout.category==="Strength/Resistance"? `border-strength`: workout.category === "Flexibility"? `border-flexibility`: `border-cardio` }`}>
                <div className="card-body">
                <h4
                  className={`card-header text-light p-2 m-0 rounded-md ${
                    workoutCategoriesBgColors[workout.category]
                  } `}
                >
                  {capitalize(workout.title)}{" "}
                  {new Date(parseInt(workout.date) + 86400000).toLocaleString(
                    "en-us",
                    {
                      month: "numeric",
                      day: "numeric",
                      year: "numeric",
                    }
                  )}
                </h4>
                <p>Category: {capitalize(workout.category)}</p>
                <p>Duration: {capitalize(workout.duration)} minutes</p>
                <p>Comment: {capitalize(workout.note)}</p>
                <Link
                  className={`btn ${
                    workoutCategoriesForeColors[workout.category]
                  } btn-block btn-squared btn-light text-dark`}
                  to={`/workouts/${workout._id}`}
                  state={{ from: workout }}
                >
                  View this workout.
                </Link>
              </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default WorkoutsList;
