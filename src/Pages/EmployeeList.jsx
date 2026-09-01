import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  getEmployees,
  deleteEmployee,
} from "../Services/employeeService";

import EmployeeTable from "../Components/EmployeeTable";
import ConfirmDialog from "../Components/ConfirmDialog";
import Loading from "../Components/Loading";

function EmployeeList() {
  const navigate = useNavigate();

  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");

  const [deleteId, setDeleteId] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    try {
      setLoading(true);

      const data = await getEmployees();

      setEmployees(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredEmployees = employees.filter(
    (employee) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        employee.id.toString().includes(searchText) ||
        `${employee.firstName} ${employee.lastName}`
          .toLowerCase()
          .includes(searchText) ||
        employee.email
          .toLowerCase()
          .includes(searchText);

      const matchesDepartment =
        department === "" ||
        employee.department === department;

      const matchesLocation =
        location === "" ||
        employee.location === location;

      const matchesStatus =
        status === "" ||
        employee.status === status;

      return (
        matchesSearch &&
        matchesDepartment &&
        matchesLocation &&
        matchesStatus
      );
    }
  );

  const departments = [
    ...new Set(
      employees.map(
        (employee) => employee.department
      )
    ),
  ];

  const locations = [
    ...new Set(
      employees.map(
        (employee) => employee.location
      )
    ),
  ];

  const clearFilters = () => {
    setSearch("");
    setDepartment("");
    setLocation("");
    setStatus("");
  };

  const handleDelete = async () => {
    try {
      await deleteEmployee(deleteId);

      setEmployees((previous) =>
        previous.filter(
          (employee) =>
            employee.id !== deleteId
        )
      );

      setDeleteId(null);

      setMessage(
        "Employee deleted successfully."
      );

      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="page">

      <div className="page-header">
        <div>
          <h2>Employees</h2>
          <p>View and manage employee records</p>
        </div>

        <button
          className="btn btn-primary"
          onClick={() =>
            navigate("/employees/add")
          }
        >
          + Add Employee
        </button>
      </div>

      {message && (
        <div className="success-message">
          {message}
        </div>
      )}

      <div className="filter-box">

        <div className="form-group">
          <label>Search</label>

          <input
            type="text"
            placeholder="Search ID, name or email"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />
        </div>

        <div className="form-group">
          <label>Department</label>

          <select
            value={department}
            onChange={(e) =>
              setDepartment(e.target.value)
            }
          >
            <option value="">
              All Departments
            </option>

            {departments.map((item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Location</label>

          <select
            value={location}
            onChange={(e) =>
              setLocation(e.target.value)
            }
          >
            <option value="">
              All Locations
            </option>

            {locations.map((item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Status</label>

          <select
            value={status}
            onChange={(e) =>
              setStatus(e.target.value)
            }
          >
            <option value="">
              All Status
            </option>

            <option value="ACTIVE">
              Active
            </option>

            <option value="INACTIVE">
              Inactive
            </option>
          </select>
        </div>

        <button
          className="btn btn-secondary"
          onClick={clearFilters}
        >
          Clear
        </button>

      </div>

      <EmployeeTable
        employees={filteredEmployees}
        onDelete={(id) => setDeleteId(id)}
      />

      {deleteId && (
        <ConfirmDialog
          message="Are you sure you want to delete this employee?"
          onConfirm={handleDelete}
          onCancel={() => setDeleteId(null)}
        />
      )}

    </div>
  );
}

export default EmployeeList;