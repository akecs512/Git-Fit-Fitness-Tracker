import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_WORKOUT } from "../../utils/mutations";

import Auth from "../../utils/auth";

const SelectiveWorkoutCard = ({ userId }) => {
  const [workout, setWorkout] = useState({name: '', category: '', date: '', duration: '', notes: ''});

  const [addWorkout, { error }] = useMutation(ADD_WORKOUT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addWorkout({
        variables: { userId, workout },
      });

      setWorkout({});x
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div>
        <h4></h4>

        {Auth.loggedIn() ? (
          <div className="card glass">
            <div className="card-body">
              <h2 className="card-title text-5xl justify-center text-secondary font-bold">
                Add Workout
              </h2>
              <form
                className="flex flex-row justify-center justify-space-between-md align-center mt-8"
                onSubmit={handleFormSubmit}
              >
                <div className="form-control flex flex-col col-12 col-lg-9">
                  <details className="dropdown mb-32">
                    <summary className="m-1 btn">Type of Workout</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                      <li>
                        <a>Cardio/Aerobic</a>
                      </li>
                      <li>
                        <a>Strength/Resistance</a>
                      </li>
                      <li>
                        <a>Flexibility</a>
                      </li>
                    </ul>
                  </details>

                  <input
                    placeholder="Name of workout..."
                    value={workout}
                    className="form-input border "
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
                    <button
                      className="flex btn btn-info btn-block py-3"
                      type="submit"
                    >
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
            </div>
          </div>
        ) : (
          <p>
            You need to be logged in to add a workout. Please{" "}
            <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
          </p>
        )}
      </div>
    </>
  );
};

export default SelectiveWorkoutCard;
