import { useLocation, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { bmiCategories } from "../data";

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const state = location.state;

  // Redirect to home if page refreshed
  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, [state, navigate]);

  if (!state) return null;

  const { name, bmi } = state;
  const numericBMI = Number(bmi);

  const category = bmiCategories.find(
    (item) => numericBMI >= item.min && numericBMI <= item.max
  );

  return (
    <div className="container">
      <h2>Hello {name} 👋</h2>

      <h3>Your BMI: {bmi}</h3>

      {category && (
        <>
          <h3 className="category">{category.type}</h3>

          <img
            src={category.image}
            alt={category.type}
            className="bmi-image"
          />
        </>
      )}

      <Link to="/">
        <button className="secondary-btn">Back to Home</button>
      </Link>
    </div>
  );
};

export default Result;