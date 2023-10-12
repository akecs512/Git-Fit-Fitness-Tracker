import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";

const MetricsChart = () => {
  const { data } = useQuery(QUERY_ME);

  const workouts = data?.me?.workouts || [];

  console.log(JSON.parse(workouts[0]))

  
  return <div>Metrics</div>;
};

export default MetricsChart;
