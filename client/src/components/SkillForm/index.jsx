import { useState } from "react";
import { useMutation } from "@apollo/client";

import { ADD_SKILL } from "../../utils/mutations";

const ActivityForm = ({ profileId }) => {
  const [activity, setActivity] = useState("");

  const [addActivity, { error }] = useMutation(ADD_SKILL);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addActivity({
        variables: { profileId, activity },
      });

      setActivity("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h4>Enter some information here</h4>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12 col-lg-9">
          <input
            placeholder="Information"
            value={activity}
            className="form-input w-100"
            onChange={(event) => setActivity(event.target.value)}
          />
        </div>

        <div className="col-12 col-lg-3">
          <button className="btn btn-info btn-block py-3" type="submit">
            Submit
          </button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
      </form>
    </div>
  );
};

export default ActivityForm;
