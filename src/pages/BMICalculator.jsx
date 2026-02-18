import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const navigate = useNavigate();

  const calculateBMI = () => {
    if (!height || !weight) {
      alert("Please enter height and weight");
      return;
    }

    const h = height / 100;
    const bmi = (weight / (h * h)).toFixed(2);

    navigate("/result", { state: { bmi } });
  };

  return (
    <div className="container">
      <h2>BMI Calculator</h2>

      <input
        type="number"
        placeholder="Enter Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />

      <button onClick={calculateBMI}>
        Calculate BMI
      </button>
    </div>
  );
};

export default BMICalculator;
