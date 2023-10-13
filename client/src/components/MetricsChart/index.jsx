import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useEffect, useState } from "react";
import {
  STR_OPTION,
  CARD_OPTION,
  FLEX_OPTION,
  workoutCategories,
} from "../../utils/categories";

ChartJS.register(ArcElement, Tooltip, Legend);

const chartData = (counterObj) => ({
  labels: workoutCategories,
  datasets: [
    {
      label: "# workouts",
      // needs to match the order fo workoutCategories.
      data: [counterObj.str, counterObj.card, counterObj.flex],
      backgroundColor: [
        "rgba(26, 142, 121, 1)",
        "rgba(137, 82, 127, 1)",
        "rgba(25, 161, 252, 1)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
});

const defaultCounter = { str: 0, card: 0, flex: 0 };

const MetricsChart = () => {
  const { data } = useQuery(QUERY_ME);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const workouts = data?.me?.workouts || [];
  const [counter, setCounter] = useState(defaultCounter);
  const [chartDataState, setChartDataState] = useState(chartData(counter));

  useEffect(() => {
    const parsedWorkouts =
      workouts.length > 0 ? workouts.map((workout) => JSON.parse(workout)) : [];

    const categoryCount = parsedWorkouts.reduce((counter, current) => {
      if (current.category === STR_OPTION) counter.str += 1;
      if (current.category === CARD_OPTION) counter.card += 1;
      if (current.category === FLEX_OPTION) counter.flex += 1;
      return counter;
    }, defaultCounter);

    setCounter(categoryCount);
    setChartDataState(chartData(categoryCount));
  }, [workouts]);


  return (
    <>
      <div>Metrics</div>
      <div className="flex justify-center">
        {/* <span>{counter}</span> */}
        <div className="w-96 h-96 justify-self-center">
          <Pie data={chartDataState} />
        </div>
      </div>
    </>
  );
};

export default MetricsChart;