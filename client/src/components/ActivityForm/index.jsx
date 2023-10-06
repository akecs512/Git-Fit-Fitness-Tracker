import { useState } from "react";
import { useMutation } from "@apollo/client";

<<<<<<< HEAD:client/src/components/ActivityForm/index.jsx
import { ADD_ACTIVITY } from '../../utils/mutations';
import { QUERY_ACTIVITIES } from '../../utils/queries';

const ActivityForm = () => {
  const [name, setName] = useState('');

  const [addActivity, { error }] = useMutation(ADD_ACTIVITY, {
    refetchQueries: [
      QUERY_ACTIVITIES,
      'allActivities'
    ]
=======
import { ADD_PROFILE } from "../../utils/mutations";
import { QUERY_PROFILES } from "../../utils/queries";

const UserForm = () => {
  const [name, setName] = useState("");

  const [addUser, { error }] = useMutation(ADD_PROFILE, {
    refetchQueries: [QUERY_PROFILES, "allUsers"],
>>>>>>> 6dda95c53939c19ac973efe39d2142c02484e734:client/src/components/ProfileForm/index.jsx
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
<<<<<<< HEAD:client/src/components/ActivityForm/index.jsx
      const { data } = await addActivity({
=======
      const { data } = await addUser({
>>>>>>> 6dda95c53939c19ac973efe39d2142c02484e734:client/src/components/ProfileForm/index.jsx
        variables: { name },
      });

      setName("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
<<<<<<< HEAD:client/src/components/ActivityForm/index.jsx
      <h3>Enter Activity</h3>
=======
      <h3>Add User</h3>
>>>>>>> 6dda95c53939c19ac973efe39d2142c02484e734:client/src/components/ProfileForm/index.jsx
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12 col-lg-9">
          <input
<<<<<<< HEAD:client/src/components/ActivityForm/index.jsx
            placeholder="Enter Activity Here..."
            
=======
            placeholder="Add your user name..."
            value={name}
>>>>>>> 6dda95c53939c19ac973efe39d2142c02484e734:client/src/components/ProfileForm/index.jsx
            className="form-input w-100"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
<></>
        <div class='date'>
          <input type='date' />
        </div>

        <div class='duration'>
          <input type='time' />
        </div>

        <div class='notes'>
          <input type='text' />
        </div>
<></>
        <div className="col-12 col-lg-3">
          <button className="btn btn-info btn-block py-3" type="submit">
<<<<<<< HEAD:client/src/components/ActivityForm/index.jsx
            Submit Activity
=======
            Add User
>>>>>>> 6dda95c53939c19ac973efe39d2142c02484e734:client/src/components/ProfileForm/index.jsx
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

<<<<<<< HEAD:client/src/components/ActivityForm/index.jsx
export default ActivityForm;
=======
export default UserForm;
>>>>>>> 6dda95c53939c19ac973efe39d2142c02484e734:client/src/components/ProfileForm/index.jsx
