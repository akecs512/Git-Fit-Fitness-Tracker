
import React, { useState } from "react";


function BmiCalculator() {
  const [heightValue, setHeightValue] = useState("");
  const [weightValue, setWeightValue] = useState("");
  const [bmiValue, setBmiValue] = useState("");
  const [bmiMessage, setBmiMessage] = useState("");

  const calculateBmi = () => {
    if (heightValue && weightValue) {
      const heightInInches = heightValue;
      const bmi = (703*(weightValue / (heightInInches * heightInInches))).toFixed(2);
      setBmiValue(bmi);

      let message = "";
      if (bmi < 18.5) {
        message = "You are Underweight";
      } else if (bmi >= 18.5 && bmi < 25) {
        message = "You are Normal weight";
      } else if (bmi >= 25 && bmi < 30) {
        message = "You are Overweight";
      } else {
        message = "You are Obese";
      }
      setBmiMessage(message);
    } else {
      setBmiValue("");
      setBmiMessage("");
    }
  };

  return (
    <>
      <div className="BMI-card w-96 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title border-2 border-secondary p-2 text-secondary">BMI Calculator</h2>
            <div className="input-container">
              <label htmlFor="height">Enter Your Height (in):</label>
              <input
              className="text-black"
                type="number"
                id="height"
                value={heightValue}
                onChange={(e) => setHeightValue(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label htmlFor="weight">Enter Your Weight (lb):</label>
              <input
                className="text-black"
                type="number"
                id="weight"
                value={weightValue}
                onChange={(e) => setWeightValue(e.target.value)}
              />
            </div>
            <button className="calculate-btn bg-secondary text-black p-1" onClick={calculateBmi}>
              Click to Calculate BMI
            </button>
            {bmiValue && bmiMessage && (
              <div className="result p-4">
                <p>
                  Your BMI: <span className="bmi-value">{bmiValue}</span>
                </p>
                <p className="underline underline-offset-4 decoration-double decoration-secondary">
                  Result: <span className="bmi-message">{bmiMessage}</span>
                </p>
              </div>
            )}
          </div>
        </div>
     
    </>
  );
}

export default BmiCalculator;
