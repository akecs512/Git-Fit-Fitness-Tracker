import { useQuery } from "@apollo/client";

import WorkoutsList from "../components/WorkoutsList";
import Header from "../components/Header";

import { QUERY_ME } from "../utils/queries";
import HomeBarInfo from "../components/Header/HomeBarInfo";


const Home = () => {
  const { loading, data } = useQuery(QUERY_ME);

  const workouts = data?.me?.workouts || [];

  return (
    <>
      <Header>
        <HomeBarInfo />
      </Header>
      <main>
        <div
          className="hero min-h-screen"
          style={{ backgroundImage: "url(/fitBg.jpeg" }}
        >
          <div className="flex-row justify-center">
            <div className="col-12 col-md-10 my-3 text-3xl">
              {loading ? (
                <div>Loading...</div>
              ) : (
                workouts && (
                  <WorkoutsList workouts={workouts} title="Workout History" />
                )
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
