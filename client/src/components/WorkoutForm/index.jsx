import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useOnClickOutside } from "use-hooks";
import { workoutCategories } from "../../utils/categories";
import cn from "classnames";

import Auth from "../../utils/auth";
import { formatToInputDate } from "../../utils/helpers";
export const defaultWorkout = {
  title: "",
  date: "",
  duration: 0,
  comment: "",
  category: "",
  userId: "",
};

const WorkoutForm = ({ userId, query, workout: currWk }) => {
  const [workout, setWorkout] = useState(
    currWk
      ? {
          title: currWk.workoutTitle,
          date: currWk.workoutDate,
          duration: currWk.workoutDuration,
          comment: currWk.comment,
          category: currWk.category,
          userID: Auth.getUser().data._id,
        }
      : defaultWorkout
  );
  const [category, setCategory] = useState(workout.category);
  let currDate;
  if (currWk) currDate = formatToInputDate(currWk.workoutDate);
  else currDate = "";
  const [displayDate, setDisplayDate] = useState(currDate);
  const [open, setOpen] = useState();
  const ref = useRef();
  const navigate = useNavigate();
  useOnClickOutside(ref, () => setOpen(false));

  console.log({ query });

  const [mutateWorkout, { error }] = useMutation(query);

  const handleClick = (e) => {
    setCategory(e.target.innerText);
    setOpen(false);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await mutateWorkout({
        variables: {
          userId: userId,
          workoutTitle: workout.title,
          workoutDate: workout.date,
          workoutDuration: workout.duration.toString(),
          comment: workout.comment,
          category: category,
        },
      });

      setWorkout(defaultWorkout);

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
        
          
              <form
                className="flex flex-row justify-center justify-space-between-md align-center mt-8"
                onSubmit={handleFormSubmit}
              >
                <div className="form-control flex flex-col col-12 col-lg-3">
                  <div
                    className={cn({
                      "dropdown": true,
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
                      value={workout.title}
                      className="form-input border"
                      onChange={(event) =>
                        setWorkout({ ...workout, title: event.target.value })
                      }
                    />

                    <input
                      type="date"
                      placeholder="Date (MM/DD/YYYY)..."
                      value={displayDate}
                      className="form-input"
                      onChange={(event) => {
                        // setDisplayDate(event.target.value);
                        setWorkout({ ...workout, date: event.target.value });
                      }}
                    />

                    <input
                      type="number"
                      placeholder="Duration in minutes..."
                      value={workout.duration}
                      className="form-input"
                      onChange={(event) =>
                        setWorkout({ ...workout, duration: event.target.value })
                      }
                    />
                    <textarea
                      className="form-input"
                      value={workout.comment}
                      placeholder="Notes..."
                      onChange={(event) =>
                        setWorkout({ ...workout, comment: event.target.value })
                      }
                    ></textarea>

                    <div className="flex col-12 col-lg-3">
                      <button
                        className="flex btn btn-info btn-block py-3"
                        type="submit"
                      >
                       Update Workout
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
