import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BMICalculator() {
  const [name, setName] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const navigate = useNavigate();

  const calculateBMI = () => {
    const trimmedName = name.trim();

    if (!trimmedName || !height || !weight) {
      alert("Please fill all fields");
      return;
    }

    if (height <= 0 || weight <= 0) {
      alert("Height and Weight must be positive values");
      return;
    }

    const heightMeter = height / 100;
    const bmiValue = weight / (heightMeter * heightMeter);
    const bmi = bmiValue.toFixed(2);

    navigate("/result", {
      state: { name: trimmedName, bmi }
    });
  };

  return (
    <div className="container">
      <h2>BMI Calculator</h2>

      <input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

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
}

export default BMICalculator;