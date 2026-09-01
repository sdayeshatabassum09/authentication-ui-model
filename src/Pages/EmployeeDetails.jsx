import { useEffect, useState } from "react";
import {
  useNavigate,
  useParams,
} from "react-router-dom";

import {
  getEmployeeById,
} from "../Services/employeeService";

import Loading from "../Components/Loading";

function EmployeeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadEmployee();
  }, [id]);

  const loadEmployee = async () => {
    try {
      setLoading(true);

      const data = await getEmployeeById(id);

      setEmployee(data);
    } catch (error) {
      setError("Employee not found.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="error-box">
        <h2>{error}</h2>

        <button
          className="btn btn-primary"
          onClick={() =>
            navigate("/employees")
          }
        >
          Back to Employees
        </button>
      </div>
    );
  }

  return (
    <div className="page">

      <div className="page-header">
        <div>
          <h2>Employee Details</h2>
          <p>Complete employee information</p>
        </div>

        <button
          className="btn btn-secondary"
          onClick={() =>
            navigate("/employees")
          }
        >
          Back
        </button>
      </div>

      <div className="details-card">

        <div className="detail-item">
          <span>Employee ID</span>
          <strong>{employee.id}</strong>
        </div>

        <div className="detail-item">
          <span>First Name</span>
          <strong>{employee.firstName}</strong>
        </div>

        <div className="detail-item">
          <span>Last Name</span>
          <strong>{employee.lastName}</strong>
        </div>

        <div className="detail-item">
          <span>Email</span>
          <strong>{employee.email}</strong>
        </div>

        <div className="detail-item">
          <span>Phone</span>
          <strong>{employee.phone}</strong>
        </div>

        <div className="detail-item">
          <span>Department</span>
          <strong>{employee.department}</strong>
        </div>

        <div className="detail-item">
          <span>Designation</span>
          <strong>{employee.designation}</strong>
        </div>

        <div className="detail-item">
          <span>Location</span>
          <strong>{employee.location}</strong>
        </div>

        <div className="detail-item">
          <span>Status</span>
          <strong>{employee.status}</strong>
        </div>

        <div className="detail-item">
          <span>Created Date</span>
          <strong>{employee.createdDate}</strong>
        </div>

        <div className="detail-item">
          <span>Updated Date</span>
          <strong>{employee.updatedDate}</strong>
        </div>

      </div>
    </div>
  );
}

export default EmployeeDetails;