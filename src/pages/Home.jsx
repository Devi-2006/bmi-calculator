import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <h1>BMI Calculator</h1>

      <Link to="/bmi">
        <button>Start Calculation</button>
      </Link>
    </div>
  );
};

export default Home;
