import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Header from "./Components/Header";
import Navigation from "./Components/Navigation";

import Dashboard from "./Pages/Dashboard";
import EmployeeList from "./Pages/EmployeeList";
import EmployeeDetails from "./Pages/EmployeeDetails";
import EmployeeFormPage from "./Pages/EmployeeFormPage";

function App() {
  return (
    <>
      <Header />

      <Navigation />

      <main className="main-content">
        <Routes>

          <Route
            path="/"
            element={
              <Navigate
                to="/dashboard"
                replace
              />
            }
          />

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/employees"
            element={<EmployeeList />}
          />

          <Route
            path="/employees/add"
            element={<EmployeeFormPage />}
          />

          <Route
            path="/employees/edit/:id"
            element={<EmployeeFormPage />}
          />

          <Route
            path="/employees/:id"
            element={<EmployeeDetails />}
          />

          <Route
            path="*"
            element={
              <div className="not-found">
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>
                  The page you are looking for
                  does not exist.
                </p>
              </div>
            }
          />

        </Routes>
      </main>
    </>
  );
}

export default App;