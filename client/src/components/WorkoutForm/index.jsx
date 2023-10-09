import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_WORKOUT } from "../../utils/mutations";

import Auth from "../../utils/auth";

const WorkoutForm = ({ userId }) => {
  const [workout, setWorkout] = useState("");

  const [addWorkout, { error }] = useMutation(ADD_WORKOUT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await addWorkout({
        variables: { userId, workout },
      });

      setWorkout("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h4></h4>

      {Auth.loggedIn() ? (
        <form
          className="flex flex-row justify-center justify-space-between-md align-center"
          onSubmit={handleFormSubmit}
        >
          <div className="form-control flex flex-col col-12 col-lg-9">
            <input
              placeholder="Name of workout..."
              value={workout}
              className="form-input borderw-100"
              onChange={(event) => setWorkout(event.target.value)}
            />

            <input
              type="date"
              placeholder="Date (MM/DD/YYYY)..."
              className="form-input "
            />
            <input
              type="number"
              placeholder="Duration in minutes..."
              className="form-input"
            />
            <textarea
              className="form-input"
              placeholder="Notes..."
            ></textarea>
       

          <div className="flex col-12 col-lg-3">
            <button className="flex btn btn-info btn-block py-3" type="submit">
              Add Workout
            </button>
          </div>
          {error && (
            <div className="col-12 my-3 bg-danger text-white p-3">
              {error.message}
            </div>
        
          )}
          </div>
        </form>
      ) : (
        <p>
          You need to be logged in to add a new workout Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default WorkoutForm;
