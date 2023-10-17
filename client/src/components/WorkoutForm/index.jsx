import { useState, useRef } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useOnClickOutside } from "use-hooks";
import { workoutCategories } from "../../utils/categories";
import cn from "classnames";

import { ADD_WORKOUT } from "../../utils/mutations";

import Auth from "../../utils/auth";

const WorkoutForm = (userId) => {
 
  const [category, setCategory] = useState("");
  const [workoutTitle, setWorkoutTitle] = useState("");
  const [workoutDate, setWorkoutDate] = useState("");
  const [workoutDuration, setWorkoutDuration] = useState(0);
  const [comment, setComment] = useState("");
  const [open, setOpen] = useState();
  const ref = useRef();
  const navigate = useNavigate();
  useOnClickOutside(ref, () => setOpen(false));

  const [addWorkout, { error }] = useMutation(ADD_WORKOUT);

  const handleClick = (e) => {
    setCategory(e.target.innerText);
    setOpen(false);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const strDuration = workoutDuration.toString();
    try {
      await addWorkout({
        variables: {
          userId: userId,
          workoutTitle: workoutTitle,
          workoutDate: workoutDate,
          workoutDuration: strDuration,
          comment: comment,
          category: category
        },
      });

      setWorkoutTitle("");
      setWorkoutDate("");
      setWorkoutDuration(0);
      setComment("");
      setCategory("");
      navigate("/");
      location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div>
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
                <div className="form-control flex flex-col col-12 col-lg-3">
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
                    {category || "Select a category"}
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
                    value={workoutTitle}
                    className="form-input border "
                    onChange={(event) => setWorkoutTitle(event.target.value)}
                  />

                  <input
                    type="date"
                    placeholder="Date (MM/DD/YYYY)..."
                    value={workoutDate}
                    className="form-input "
                    onChange={(event) => {
                      // const date = new Date(
                      //   event.target.value
                      // ).toLocaleDateString("en-US");
                      setWorkoutDate(event.target.value);
                    }}
                  />

                  <input
                    type="number"
                    placeholder="Duration in minutes..."
                    value={workoutDuration}
                    className="form-input"
                    onChange={(event) => setWorkoutDuration(event.target.value)}
                  />
                  <textarea
                    className="form-input"
                    value={comment}
                    placeholder="Notes..."
                    onChange={(event) => setComment(event.target.value)}
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
