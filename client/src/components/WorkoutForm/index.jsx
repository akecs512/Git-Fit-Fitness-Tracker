import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import cn from "classnames";
import { ADD_WORKOUT } from "../../utils/mutations";
import Auth from "../../utils/auth";
import { useOnClickOutside } from "use-hooks";

import { workoutCategories } from "../../utils/categories";

const defaultWorkout = {
  name: "",
  category: "",
  date: "",
  duration: "",
  notes: "",
};

// eslint-disable-next-line react/prop-types
const WorkoutForm = ({ userId }) => {
  const [workout, setWorkout] = useState(defaultWorkout);
  const [open, setOpen] = useState();
  const navigate = useNavigate();
  const ref = useRef();
  useOnClickOutside(ref, () => setOpen(false));

  const [addWorkout, { error }] = useMutation(ADD_WORKOUT);

  const handleClick = (e) => {
    setWorkout({ ...workout, category: e.target.innerText });
    setOpen(false);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addWorkout({
        variables: { userId, workout: JSON.stringify(workout) },
      });

      setWorkout(defaultWorkout);
      navigate("/");
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
                  <div
                    className={cn({
                      "dropdown mb-8": true,
                      "dropdown-open": open,
                    })}
                    ref={ref}
                  >
                    <div
                      className="m-1 btn"
                      onClick={() => setOpen((prev) => !prev)}
                    >
                      {workout.category || "Select a category"}
                    </div>
                    <ul
                      className={cn({
                        "p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52": true,
                        hidden: !open,
                      })}
                    >
                      {workoutCategories.map((category) => (
                        <li key={category}>
                          <a onClick={handleClick}>{category}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="form-control flex flex-col col-12 col-lg-9">
                    <input
                      placeholder="Name of workout..."
                      value={workout.name}
                      className="form-input border "
                      onChange={(event) =>
                        setWorkout({ ...workout, name: event.target.value })
                      }
                    />

                    <input
                      type="date"
                      placeholder="Date (MM/DD/YYYY)..."
                      className="form-input"
                      value={workout.date}
                      onChange={(event) =>
                        setWorkout({ ...workout, date: event.target.value })
                      }
                    />
                    <input
                      type="number"
                      placeholder="Duration in minutes..."
                      className="form-input"
                      value={workout.duration}
                      onChange={(event) =>
                        setWorkout({ ...workout, duration: event.target.value })
                      }
                    />
                    <textarea
                      className="form-input"
                      placeholder="Notes..."
                      value={workout.notes}
                      onChange={(event) =>
                        setWorkout({ ...workout, notes: event.target.value })
                      }
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

export default WorkoutForm;
