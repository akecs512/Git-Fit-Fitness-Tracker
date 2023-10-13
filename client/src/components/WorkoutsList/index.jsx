import { Link } from "react-router-dom";
import { workoutCategoriesBgColors, workoutCategoriesForeColors } from "../../utils/categories";

const WorkoutsList = ({ workouts: serializedWorkouts, title }) => {
  if (!serializedWorkouts.length) {
    return <h3>No Workouts Yet</h3>;
  }

  const workouts = serializedWorkouts.map((workout) => JSON.parse(workout));

  return (
    <div>
      <h3 className="text-primary">{title}</h3>
      <div className="flex-row justify-space-between my-4">
        {workouts &&
          workouts.map((workout, index) => (
            <div key={index} className="col-12 col-xl-6">
              <div className="card-list mb-3">
                <h4
                  className={`card-header ${
                    workoutCategoriesBgColors[workout.category]
                  } text-light p-2 m-0 bg-primary`}
                >
                  {workout.name} {workout.date}
                </h4>
                <Link
                  className={`btn ${workoutCategoriesForeColors[workout.category]} btn-block btn-squared btn-light text-dark`}
                  to={`/workouts/:workoutId/`}
                >
                  View this workout.
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WorkoutsList;
