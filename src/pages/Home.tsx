import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Routine Cycler</h1>
      <p>Welcome to your routine management app!</p>
      <div className="navigation">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/routines" className="nav-link">
          Routines
        </Link>
        <Link to="/settings" className="nav-link">
          Settings
        </Link>
      </div>
    </div>
  );
};

export default Home;
