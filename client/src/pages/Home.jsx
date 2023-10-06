import { useQuery } from "@apollo/client";

<<<<<<< HEAD

import ActivityForm from '../components/ActivityForm';

import { QUERY_ACTIVITIES } from '../utils/queries';
=======
import UserList from "../components/UserList";
import UserForm from "../components/UserForm";

import { QUERY_PROFILES } from "../utils/queries";
>>>>>>> 6dda95c53939c19ac973efe39d2142c02484e734

const Home = () => {
  const { loading, data } = useQuery(QUERY_ACTIVITIES);

<<<<<<< HEAD
  const activities = data?.activities || [];
=======
  const users = data?.users || [];
>>>>>>> 6dda95c53939c19ac973efe39d2142c02484e734

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: "1px dotted #1a1a1a" }}
        >
<<<<<<< HEAD
          <ActivityForm />
        </div>


=======
          <UserForm />
        </div>

        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <UserList users={users} title="User List" />
          )}
        </div>
>>>>>>> 6dda95c53939c19ac973efe39d2142c02484e734
      </div>
    </main>
  );
};

export default Home;
