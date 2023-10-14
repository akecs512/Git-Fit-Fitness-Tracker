import { useEffect, useState } from 'react';
import { useLocation  } from 'react-router-dom'

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
let [workoutObj, setworkoutObj] = useState({})
console.log(location)
useEffect(()=>{
  const workOutId = window.location.pathname.split('/')[2]
{/* const { loading, data } = useQuery(workout(workOutId));*/}
  {/* const workout = new workout(workOutId);*/}
},[ ])

console.log(workoutObj)

  return (
    <>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: "url(/musclebg.jpeg" }}
      >\
      <div className="card w-96 glass mt-8">
        <div className="card-body">
          <h2 className="card-title justify-center">Edit or Delete Your Workout</h2>
          <button
            className="btn btn-sm btn-danger ml-auto"
            onClick={() => handleRemoveWorkout(workout)}
                    >
                      Delete
          </button>

          <button
            className="btn btn-sm btn-danger ml-auto"
            onClick={() => handleUpdateWorkout(workout)}
                    >
                      Edit
          </button>
          <p>
            {/* {workoutObj && <p>{workoutObj.name}</p>} */}
           {/* {workoutObj && <p>{workoutObj.title}</p>} */}
          
          {from.title}
          </p> 
          </div>
        </div>
      </div>
    
    </>
  );
};

export default EditWorkout;
