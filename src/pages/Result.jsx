import React from "react";
import { useLocation, Link } from "react-router-dom";
import { bmiCategories } from "../data";

const Result = () => {
  const location = useLocation();
  const bmiValue = Number(location.state?.bmi);

  if (!bmiValue) {
    return (
      <div className="container">
        <h2>No BMI Data Found</h2>
        <Link to="/bmi">
          <button>Go Back</button>
        </Link>
      </div>
    );
  }

  const category = bmiCategories.find(
    (item) => bmiValue >= item.min && bmiValue <= item.max
  );

 return (
  <div className="container">
    <h2>Your BMI: {bmiValue}</h2>

    {category && (
      <>
        <h3 className="result-text">{category.type}</h3>

        <div className="image-wrapper">
          <img src={category.image} alt="BMI Result" />
        </div>

        <div className="button-wrapper">
          <Link to="/bmi">
            <button>Back</button>
          </Link>
        </div>
      </>
    )}
  </div>
);

};

export default Result;
