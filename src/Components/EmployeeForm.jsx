import { useEffect, useState } from "react";

import { validateEmployee } from "../Utils/validation";

import {
  employeeDefaultValues,
} from "../Types/employee";

function EmployeeForm({
  initialData,
  onSubmit,
  onCancel,
  loading,
}) {
  const [formData, setFormData] = useState(
    employeeDefaultValues
  );

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialData) {
      setFormData({
        firstName: initialData.firstName || "",
        lastName: initialData.lastName || "",
        email: initialData.email || "",
        phone: initialData.phone || "",
        department: initialData.department || "",
        designation: initialData.designation || "",
        location: initialData.location || "",
        status: initialData.status || "ACTIVE",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateEmployee(formData);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="employee-form"
    >
      <div className="form-grid">

        <div className="form-group">
          <label>First Name *</label>

          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />

          {errors.firstName && (
            <small className="error">
              {errors.firstName}
            </small>
          )}
        </div>

        <div className="form-group">
          <label>Last Name *</label>

          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />

          {errors.lastName && (
            <small className="error">
              {errors.lastName}
            </small>
          )}
        </div>

        <div className="form-group">
          <label>Email *</label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          {errors.email && (
            <small className="error">
              {errors.email}
            </small>
          )}
        </div>

        <div className="form-group">
          <label>Phone Number *</label>

          <input
            type="text"
            name="phone"
            maxLength="10"
            value={formData.phone}
            onChange={handleChange}
          />

          {errors.phone && (
            <small className="error">
              {errors.phone}
            </small>
          )}
        </div>

        <div className="form-group">
          <label>Department *</label>

          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
          >
            <option value="">Select Department</option>
            <option value="IT">IT</option>
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
          </select>

          {errors.department && (
            <small className="error">
              {errors.department}
            </small>
          )}
        </div>

        <div className="form-group">
          <label>Designation *</label>

          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
          />

          {errors.designation && (
            <small className="error">
              {errors.designation}
            </small>
          )}
        </div>

        <div className="form-group">
          <label>Location *</label>

          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
          >
            <option value="">Select Location</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Chennai">Chennai</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
          </select>

          {errors.location && (
            <small className="error">
              {errors.location}
            </small>
          )}
        </div>

        <div className="form-group">
          <label>Status *</label>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="ACTIVE">Active</option>
            <option value="INACTIVE">Inactive</option>
          </select>

          {errors.status && (
            <small className="error">
              {errors.status}
            </small>
          )}
        </div>

      </div>

      <div className="form-actions">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={onCancel}
          disabled={loading}
        >
          Cancel
        </button>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Employee"}
        </button>
      </div>
    </form>
  );
}

export default EmployeeForm;