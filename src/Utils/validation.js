export function validateEmployee(formData) {
  const errors = {};

  if (!formData.firstName.trim()) {
    errors.firstName = "First name is required.";
  } else if (!/^[A-Za-z]+$/.test(formData.firstName)) {
    errors.firstName = "First name should contain only letters.";
  }

  if (!formData.lastName.trim()) {
    errors.lastName = "Last name is required.";
  } else if (!/^[A-Za-z]+$/.test(formData.lastName)) {
    errors.lastName = "Last name should contain only letters.";
  }

  if (!formData.email.trim()) {
    errors.email = "Email is required.";
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
  ) {
    errors.email = "Enter a valid email address.";
  }

  if (!formData.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!/^[0-9]{10}$/.test(formData.phone)) {
    errors.phone = "Phone number must contain exactly 10 digits.";
  }

  if (!formData.department) {
    errors.department = "Department is required.";
  }

  if (!formData.designation.trim()) {
    errors.designation = "Designation is required.";
  }

  if (!formData.location) {
    errors.location = "Location is required.";
  }

  if (!formData.status) {
    errors.status = "Status is required.";
  }

  return errors;
}