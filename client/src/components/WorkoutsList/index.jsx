import { Link } from "react-router-dom";

const WorkoutsList = ({ workouts, title }) => {
  if (!workouts.length) {
    return <h3>No Workouts Yet</h3>;
  }

  return (
    <div>
      <h3 className="text-primary">{title}</h3>
      <div className="flex-row justify-space-between my-4">
        {workouts &&
          workouts.map((workout, index) => (
            <div key={index} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-accent text-light p-2 m-0">
                  {workout} <br />
                </h4>
                <Link
                  className="btn  btn-success btn-block btn-squared btn-light text-dark"
                  to={`/users/`}
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
