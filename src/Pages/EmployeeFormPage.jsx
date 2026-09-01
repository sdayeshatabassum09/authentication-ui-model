import { useEffect, useState } from "react";
import {
  useNavigate,
  useParams,
} from "react-router-dom";

import EmployeeForm from "../Components/EmployeeForm";

import {
  createEmployee,
  getEmployeeById,
  updateEmployee,
} from "../Services/employeeService";

import Loading from "../Components/Loading";

function EmployeeFormPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const isEdit = Boolean(id);

  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isEdit) {
      loadEmployee();
    }
  }, [id]);

  const loadEmployee = async () => {
    try {
      setLoading(true);

      const data = await getEmployeeById(id);

      setEmployee(data);
    } catch (error) {
      setError("Unable to load employee.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (formData) => {
    try {
      setSaving(true);

      if (isEdit) {
        await updateEmployee(id, formData);

        alert(
          "Employee updated successfully."
        );
      } else {
        await createEmployee(formData);

        alert(
          "Employee created successfully."
        );
      }

      navigate("/employees");

    } catch (error) {
      setError(
        "Something went wrong. Please try again."
      );
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="error-box">
        <h3>{error}</h3>

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
          <h2>
            {isEdit
              ? "Edit Employee"
              : "Add Employee"}
          </h2>

          <p>
            {isEdit
              ? "Update employee information"
              : "Create a new employee record"}
          </p>
        </div>
      </div>

      <div className="form-card">

        <EmployeeForm
          initialData={employee}
          onSubmit={handleSubmit}
          onCancel={() =>
            navigate("/employees")
          }
          loading={saving}
        />

      </div>
    </div>
  );
}

export default EmployeeFormPage;