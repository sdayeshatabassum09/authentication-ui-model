import { useEffect, useState } from "react";

import {
  getEmployees,
} from "../Services/employeeService";

import Loading from "../Components/Loading";

function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    try {
      const data = await getEmployees();
      setEmployees(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const totalEmployees = employees.length;

  const activeEmployees = employees.filter(
    (employee) => employee.status === "ACTIVE"
  ).length;

  const inactiveEmployees = employees.filter(
    (employee) => employee.status === "INACTIVE"
  ).length;

  const departments = new Set(
    employees.map((employee) => employee.department)
  ).size;

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="page">
      <div className="page-title">
        <h2>Dashboard</h2>
        <p>Employee management overview</p>
      </div>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>Total Employees</h3>
          <strong>{totalEmployees}</strong>
        </div>

        <div className="dashboard-card">
          <h3>Active Employees</h3>
          <strong>{activeEmployees}</strong>
        </div>

        <div className="dashboard-card">
          <h3>Inactive Employees</h3>
          <strong>{inactiveEmployees}</strong>
        </div>

        <div className="dashboard-card">
          <h3>Departments</h3>
          <strong>{departments}</strong>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;