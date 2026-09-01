import { useNavigate } from "react-router-dom";

function EmployeeTable({ employees, onDelete }) {
  const navigate = useNavigate();

  if (employees.length === 0) {
    return (
      <div className="empty-state">
        <h3>No employees found.</h3>
      </div>
    );
  }

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Location</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>

              <td>
                {employee.firstName} {employee.lastName}
              </td>

              <td>{employee.email}</td>

              <td>{employee.department}</td>

              <td>{employee.designation}</td>

              <td>{employee.location}</td>

              <td>
                <span
                  className={
                    employee.status === "ACTIVE"
                      ? "status active-status"
                      : "status inactive-status"
                  }
                >
                  {employee.status}
                </span>
              </td>

              <td>
                <div className="action-buttons">
                  <button
                    className="btn btn-view"
                    onClick={() =>
                      navigate(`/employees/${employee.id}`)
                    }
                  >
                    View
                  </button>

                  <button
                    className="btn btn-edit"
                    onClick={() =>
                      navigate(`/employees/edit/${employee.id}`)
                    }
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={() => onDelete(employee.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;