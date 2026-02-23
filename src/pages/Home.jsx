import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <h3>Welcome to BMI Calculator 🏋️</h3>
      <Link to="/bmi">
        <button className="primary-btn">
          Start Calculation
        </button>
      </Link>
    </div>
  );
};

export default Home;