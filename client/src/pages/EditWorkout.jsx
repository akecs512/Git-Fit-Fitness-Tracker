import { useLocation } from "react-router-dom";
import { QUERY_ME, QUERY_WORKOUT } from "../utils/queries";
import { REMOVE_WORKOUT, UPDATE_WORKOUT } from "../utils/mutations";
import { useQuery, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import WorkoutForm from "../components/WorkoutForm";

const EditWorkout = () => {
  const location = useLocation();
  const { from } = location.state;
  console.log(from);
  const navigate = useNavigate();

  const { data: userData } = useQuery(QUERY_ME);

  const workOutId = window.location.pathname.split("/")[2];
  const { loading, data } = useQuery(QUERY_WORKOUT, {
    variables: { workoutId: workOutId },
  });
  const workoutData = data?.workout;

  const [removeWorkout] = useMutation(REMOVE_WORKOUT);
  const [updateWorkout] = useMutation(UPDATE_WORKOUT);

  const handleRemoveWorkout = async (workOutId) => {
    try {
      await removeWorkout({
        variables: { workoutId: workOutId },
      });
    } catch (err) {
      console.error(err);
    }
    navigate("/");
    window.location.reload();
  };

  const handleUpdateWorkout = async (workOutId) => {
    try {
      const { data } = await updateWorkout({
        variables: { workOutId },
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

            {loading ? (
              <div> Loading ...</div>
            ) : (
              <WorkoutForm userId={userData.me._id} query={UPDATE_WORKOUT} />
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
                onClick={() => handleUpdateWorkout(workoutId)}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditWorkout;
