import { useMutation } from "@apollo/client";

import { REMOVE_WORKOUT } from "../../utils/mutations";
import { QUERY_ME } from "../../utils/queries";

const DeletableWorkoutsList = ({ workouts, isLoggedInUser = false }) => {
  const [removeWorkout, { error }] = useMutation(REMOVE_WORKOUT, {
    refetchQueries: [QUERY_ME, "me"],
  });

  const handleRemoveWorkout = async (workout) => {
    try {
      const { data } = await removeWorkout({
        variables: { workout },
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (!workouts.length) {
    return <h3>No Workouts Yet</h3>;
  }

  return (
    <div>
      <div className="flex-row justify-space-between my-4">
        {workouts &&
          workouts.map((workout) => (
            <div key={workout} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0 display-flex align-center">
                  <span>{workout}</span>
                  {isLoggedInUser && (
                    <button
                      className="btn btn-sm btn-danger ml-auto"
                      onClick={() => handleRemoveWorkout(workout)}
                    >
                      X
                    </button>
                  )}
                </h4>
              </div>
            </div>
          ))}
      </div>
      {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </div>
  );
};

export default DeletableWorkoutsList;
