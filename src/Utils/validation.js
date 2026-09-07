export const validateForm = (formData, termsAccepted) => {

  const errors = {};

  // Full Name
  if (!formData.fullName.trim()) {
    errors.fullName = "Full Name is required";
  } else if (
    formData.fullName.trim().length < 3 ||
    formData.fullName.trim().length > 100
  ) {
    errors.fullName =
      "Full Name must be between 3 and 100 characters";
  }

  // Email
  if (!formData.email.trim()) {
    errors.email = "Email Address is required";
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
  ) {
    errors.email = "Enter a valid email address";
  }

  // Mobile
  if (!formData.mobileNumber.trim()) {
    errors.mobileNumber = "Mobile Number is required";
  } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
    errors.mobileNumber =
      "Mobile Number must contain exactly 10 digits";
  }

  // Gender
  if (!formData.gender) {
    errors.gender = "Please select Gender";
  }

  // Address
  if (!formData.address.trim()) {
    errors.address = "Address is required";
  } else if (formData.address.length > 250) {
    errors.address =
      "Address cannot exceed 250 characters";
  }

  // City
  if (!formData.city.trim()) {
    errors.city = "City is required";
  } else if (
    formData.city.trim().length < 2 ||
    formData.city.trim().length > 50
  ) {
    errors.city =
      "City must be between 2 and 50 characters";
  }

  // State
  if (!formData.state) {
    errors.state = "Please select State";
  }

  // Pincode
  if (!formData.pincode.trim()) {
    errors.pincode = "Pincode is required";
  } else if (!/^\d{6}$/.test(formData.pincode)) {
    errors.pincode =
      "Pincode must contain exactly 6 digits";
  }

  // Terms
  if (!termsAccepted) {
    errors.terms =
      "You must accept the Terms & Conditions";
  }

  return errors;
};