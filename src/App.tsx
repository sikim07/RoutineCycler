import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { appRoutes } from "./routes";

function App() {
  return (
    <Router>
      <div className="w-full max-w-7xl mx-auto p-5 sm:p-4 md:p-5 lg:p-5 min-h-screen box-border">
        <Routes>
          {appRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
