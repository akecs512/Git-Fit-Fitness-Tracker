import { useQuery } from "@apollo/client";

import WorkoutsList from "../components/WorkoutsList";
import Header from "../components/Header";

import { QUERY_ME } from "../utils/queries";

const Home = () => {
  <Header />
  const { loading, data } = useQuery(QUERY_ME);

  const workouts = data?.me?.workouts || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            workouts && <WorkoutsList workouts={workouts} title="Workouts..." />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
