import { useQuery } from "@apollo/client";


import ActivityForm from '../components/ActivityForm';

import { QUERY_ACTIVITIES } from '../utils/queries';


const Home = () => {
  const { loading, data } = useQuery(QUERY_ACTIVITIES);


  const activities = data?.activities || [];


  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: "1px dotted #1a1a1a" }}
        >

          <ActivityForm />
        </div>



      </div>
    </main>
  );
};

export default Home;
