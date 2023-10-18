import { QUERY_ME, QUERY_WORKOUT } from "../utils/queries";
import { REMOVE_WORKOUT, UPDATE_WORKOUT } from "../utils/mutations";
import { useQuery, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import WorkoutForm from "../components/WorkoutForm";

const EditWorkout = () => {
  const navigate = useNavigate();
  const { loading: userLoading, data: userData } = useQuery(QUERY_ME);

  const workoutId = window.location.pathname.split("/")[2];
  const { loading, data } = useQuery(QUERY_WORKOUT, {
    variables: { workoutId: workoutId },
  });
  const workoutData = data?.workout;

  const [removeWorkout] = useMutation(REMOVE_WORKOUT);
  const [updateWorkout] = useMutation(UPDATE_WORKOUT);

  const handleRemoveWorkout = async (workoutId) => {
    try {
      await removeWorkout({
        variables: { workoutId },
      });
    } catch (err) {
      console.error(err);
    }
    navigate("/");
    window.location.reload();
  };

  const handleUpdateWorkout = async (workoutId) => {
    try {
      const { data } = await updateWorkout({
        variables: { workoutId },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: "url(/musclebg.jpeg" }}
      >
        <div className="card w-96 glass mt-8">
          <div className="card-body">
            <div>
              <h2 className="card-title text-5xl justify-center text-secondary font-bold">
                Edit Your Workout
              </h2>
            </div>

            {loading || userLoading ? (
              <div> Loading ...</div>
            ) : (
              <WorkoutForm
                userId={userData.me._id}
                query={UPDATE_WORKOUT}
                workout={workoutData}
              />
            )}
            <div>
              <button
                className="btn btn-sm btn-danger ml-auto"
                onClick={() => handleRemoveWorkout(workoutData._id)}
              >
                Delete
              </button>
              <button
                className="btn btn-sm btn-danger ml-auto"
                onClick={() => handleUpdateWorkout(workoutData._id)}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditWorkout;
