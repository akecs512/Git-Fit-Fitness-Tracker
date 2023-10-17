import { Link } from "react-router-dom";
import {
  workoutCategoriesBgColors,
  workoutCategoriesForeColors,
} from "../../utils/categories";
import { capitalize } from "lodash";

const WorkoutsList = ({ workouts }) => {
  if (!workouts.length) {
    return <h3>No Workouts Yet</h3>;
  }

  return (
    <>
      <div className="flex-row justify-space-between my-4">
        {workouts &&
          workouts.map((workout, index) => (
            <div key={index} className="col-12 col-xl-6">
              <div className="card-list mb-3">
                <h4
                  className={`card-header text-light p-2 m-0 ${
                    workoutCategoriesBgColors[workout.category]
                  } `}
                >
                  {capitalize(workout.workoutTitle)}{" "}
                  {new Date(parseInt(workout.workoutDate)+ 86400000).toLocaleString("en-us", {
                    month: "numeric",
                    day: "numeric",
                    year: "numeric",
                  })}
                </h4>
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
          ))}
      </div>
    </>
  );
};

export default WorkoutsList;
