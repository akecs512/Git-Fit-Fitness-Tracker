import { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_ACTIVITY } from '../../utils/mutations';
import { QUERY_ACTIVITIES } from '../../utils/queries';

const ActivityForm = () => {
  const [name, setName] = useState('');

  const [addActivity, { error }] = useMutation(ADD_ACTIVITY, {
    refetchQueries: [
      QUERY_ACTIVITIES,
      'allActivities'
    ]
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addActivity({
        variables: { name },
      });
      
      setName('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h3>Enter Activity</h3>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12 col-lg-9">
          <input
            placeholder="Enter Activity Here..."
            
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
            Submit Activity
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
