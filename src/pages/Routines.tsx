import { Link } from "react-router-dom";

const Routines = () => {
  return (
    <div className="routines">
      <h1>My Routines</h1>
      <p>Manage your daily routines here.</p>
      <div className="routine-list">
        <div className="routine-item">
          <h3>Morning Routine</h3>
          <p>Start your day with energy</p>
        </div>
        <div className="routine-item">
          <h3>Evening Routine</h3>
          <p>Wind down and prepare for tomorrow</p>
        </div>
      </div>
      <Link to="/" className="back-link">
        Back to Home
      </Link>
    </div>
  );
};

export default Routines;
