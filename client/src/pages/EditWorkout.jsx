import { useLocation  } from 'react-router-dom'
import { QUERY_WORKOUT } from "../utils/queries";
import {REMOVE_WORKOUT} from "../utils/mutations"
import { useQuery , useMutation } from "@apollo/client";

const handleRemoveWorkout = async (workout) => {
  try {
    const { data } = await removeWorkout({
      variables: { workout },
    });
  } catch (err) {
    console.error(err);
  }
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

const EditWorkout = () => {
const location = useLocation()
const { from } = location.state


const workOutId = window.location.pathname.split('/')[2]
const { loading, data } = useQuery(QUERY_WORKOUT,{variables:{workoutId: workOutId}});
const workoutData = data?.workout


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
            onClick={() => handleRemoveWorkout(workout)}>
            Delete
          </button>

          <button
            className="btn btn-sm btn-danger ml-auto"
            onClick={() => handleUpdateWorkout(workout)}>
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
