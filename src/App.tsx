import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { appRoutes } from "@/routes";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Router>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
            <Routes>
              {appRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
