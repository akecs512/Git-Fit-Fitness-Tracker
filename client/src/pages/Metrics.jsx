
import BmiCalculator from "../components/BMICalculator";
import MetricsChart from "../components/MetricsChart";


export default function Metrics() {
    return (
    <>
    <div>
    <MetricsChart />
    </div>
    <div className="flex justify-center p-4">
        <BmiCalculator />
    </div>
    </>
    )
}