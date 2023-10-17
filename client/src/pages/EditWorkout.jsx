import { useLocation  } from 'react-router-dom'
import { QUERY_WORKOUT } from "../utils/queries";
import { REMOVE_WORKOUT, UPDATE_WORKOUT } from "../utils/mutations"
import { useQuery , useMutation } from "@apollo/client";
import { useNavigate } from 'react-router-dom';

const EditWorkout = () => {
  const location = useLocation()
  const { from } = location.state
  const navigate = useNavigate()
  
  
  const workOutId = window.location.pathname.split('/')[2]
  const { loading, data } = useQuery(QUERY_WORKOUT,{variables:{workoutId: workOutId}});
  const workoutData = data?.workout

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
    window.location.reload()
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
      >\
      <div className="card w-96 glass mt-8">
        <div className="card-body">
          <h2 className="card-title justify-center">Edit or Delete Your Workout</h2>

          {loading ? (<div> Loading ...</div>) : (
      <div>
         <p>Category - {workoutData.category}</p> 
         <p>Title - {workoutData.workoutTitle}</p> 
         <p>Date - {workoutData.workoutDate}</p> 
         <p>Duration - {workoutData.workoutDuration} minutes</p> 
         <p>Notes - {workoutData.comment}</p>  
      </div>)
    }
    <div>
          <button
            className="btn btn-sm btn-danger ml-auto"
            onClick={() => handleRemoveWorkout(workoutData._id)}>
            Delete
          </button>

          <button
            className="btn btn-sm btn-danger ml-auto"
            onClick={() => handleUpdateWorkout(workoutId)}>
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
